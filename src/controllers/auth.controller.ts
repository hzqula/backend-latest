import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import sendOTPEmail from "../lib/nodemailer";
import { JWT_SECRET } from "../configs/env";
import { UserRole } from "@prisma/client";

const secretKey = JWT_SECRET || "your-secret-key";

interface SignUpRequest {
  email: string;
  password: string;
  nipOrNim: string;
  name: string;
  phoneNumber: string;
  role: UserRole;
}

interface VerifyOTPRequest {
  email: string;
  otp: string;
  signUpData: SignUpRequest;
}

export const sendOTP = async (req: Request, res: Response) => {
  try {
    console.log("Request body: ", req.body);

    const { email, role }: SignUpRequest = req.body;

    if (!email || !role) {
      return res.status(400).json({ message: "Semua input harus terisi" });
    }

    if (
      !email.endsWith("@student.unri.ac.id") &&
      !email.endsWith("@lecturer.unri.ac.id")
    ) {
      return res.status(400).json({
        message:
          "Gunakan email kampus UR (student.unri.ac.id atau lecturer.unri.ac.id)",
      });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser && existingUser.isVerify) {
      return res
        .status(400)
        .json({ message: "Email tersebut sudah didaftarkan" });
    }

    let tempUser = existingUser;

    if (!existingUser) {
      tempUser = await prisma.user.create({
        data: {
          email,
          password: "",
          role,
          isVerify: false,
        },
      });
    }

    await prisma.oTP.deleteMany({ where: { userID: tempUser!.id } });

    const otpCode = Math.floor(100000 + Math.random() * 900000);
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.oTP.create({
      data: {
        code: otpCode,
        expiresAt,
        userID: tempUser!.id,
      },
    });

    const emailSent = await sendOTPEmail(email, otpCode);

    if (!emailSent && !existingUser) {
      if (!existingUser) {
        await prisma.user.delete({
          where: { id: tempUser!.id },
        });
      }

      return res.status(500).json({
        message: "Gagal mengirim OTP, silakan coba lagi",
        success: false,
      });
    }

    return res.status(200).json({
      message: "OTP telah dikirim ke email Anda",
      success: true,
    });
  } catch (error) {
    console.error("Gagal mengirim OTP: ", error);
    return res.status(500).json({
      message: "Kesalahan terjadi ketika mengirim OTP",
      error: error instanceof Error ? error.message : "Error tidak diketahui",
    });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp }: VerifyOTPRequest = req.body;

    console.log("OTP: ", req.body);

    if (!email || !otp) {
      return res.status(400).json({ message: "Email dan OTP harus ada!" });
    }

    const tempUser = await prisma.user.findUnique({
      where: { email },
      include: {
        otp: {
          where: {
            expiresAt: { gte: new Date() },
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

    if (!tempUser || tempUser.otp.length === 0) {
      return res
        .status(400)
        .json({ message: "OTP tidak valid atau sudah kadaluwarsa" });
    }

    const validOTP = tempUser.otp[0];
    if (validOTP.code !== parseInt(otp)) {
      return res.status(400).json({ message: "Kode OTP tidak valid" });
    }

    return res.status(200).json({
      message: "OTP valid",
      success: "true",
    });
  } catch (error) {
    console.error("Verifikasi OTP gagal: ", error);
    return res.status(500).json({
      message: "Kesalahan terjadi ketika verifikasi OTP",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const completeSignUp = async (req: Request, res: Response) => {
  try {
    const { email, password, nipOrNim, name, phoneNumber, role } = req.body;

    if (!email || !password || !nipOrNim || !name || !phoneNumber || !role) {
      return res.status(400).json({ message: "Semua data harus diisi" });
    }

    const tempUser = await prisma.user.findUnique({
      where: { email },
      include: { otp: true },
    });

    if (!tempUser) {
      return res
        .status(400)
        .json({ message: "Email tidak ditemukan, silakan daftar ulang" });
    }

    if (role === UserRole.STUDENT) {
      const existingStudent = await prisma.student.findUnique({
        where: { nim: nipOrNim },
      });
      if (existingStudent) {
        return res.status(400).json({ message: "NIM sudah digunakan" });
      }
    } else if (role === UserRole.LECTURER) {
      const existingLecturer = await prisma.lecturer.findUnique({
        where: { nip: nipOrNim },
      });
      if (existingLecturer) {
        return res.status(400).json({ message: "NIP sudah digunakan" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.$transaction(async (prisma) => {
      await prisma.oTP.deleteMany({
        where: { userID: tempUser.id },
      });

      let profileData;

      if (role === UserRole.STUDENT) {
        profileData = await prisma.student.create({
          data: {
            nim: nipOrNim,
            name: name,
            phoneNumber: phoneNumber,
          },
        });

        await prisma.user.update({
          where: { id: tempUser.id },
          data: {
            password: hashedPassword,
            isVerify: true,
            studentID: profileData.id,
          },
        });
      } else if (role === UserRole.LECTURER) {
        profileData = await prisma.lecturer.create({
          data: {
            nip: nipOrNim,
            name: name,
            phoneNumber: phoneNumber,
          },
        });

        await prisma.user.update({
          where: { id: tempUser.id },
          data: {
            password: hashedPassword,
            isVerify: true,
            lecturerID: profileData.id,
          },
        });
      }

      return { user: tempUser, profile: profileData };
    });

    const token = jwt.sign(
      {
        userID: result.user.id,
        email: result.user.email,
        role: result.user.email,
      },
      secretKey,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "Pendaftaran berhasil!",
      token,
      user: {
        id: result.user.id,
        email: result.user.email,
        role: result.user.email,
        profile: result.profile,
      },
    });
  } catch (error) {
    console.error("Pendaftaran gagal: ", error);
    return res.status(500).json({
      message: "Kesalahan terjadi ketika melakukan pendaftaran",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};
