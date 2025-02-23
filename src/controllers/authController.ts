import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import sendOTPEmail from "../lib/nodemailer";
import { JWT_SECRET } from "../configs/env";

const secretKey = JWT_SECRET || "your-secret-key";

interface SignUpRequest {
  email: string;
  password: string;
  nipOrNim: string;
  name: string;
  noHP: string;
  role: "Student" | "Lecturer";
}

interface VerifyOTPRequest {
  email: string;
  otp: string;
}

export const signUp = async (req: Request, res: Response) => {
  try {
    console.log("Request body: ", req.body);

    const { email, password, nipOrNim, name, noHP, role }: SignUpRequest =
      req.body;

    if (!email || !password || !nipOrNim || !noHP || !role) {
      return res.status(400).json({ message: "Semua input harus terisi" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email tersebut sudah didaftarkan" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role: role,
          isVerify: false,
        },
      });

      if (role === "Student") {
        await prisma.student.create({
          data: {
            id: user.id,
            nim: nipOrNim,
            name,
            noHP,
          },
        });
      } else if (role === "Lecturer") {
        await prisma.lecturer.create({
          data: {
            id: user.id,
            nip: nipOrNim,
            name,
            noHP,
          },
        });
      }

      const otpCode = Math.floor(100000 + Math.random() * 900000);
      const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

      await prisma.oTP.create({
        data: {
          code: otpCode,
          expiresAt,
          userID: user.id,
        },
      });

      return { user, otpCode };
    });

    const emailSent = await sendOTPEmail(result.user.email, result.otpCode);
    return res.status(201).json({
      message: emailSent
        ? "Pendaftaran berhasil! Silakan check email untuk verifikasi OTP"
        : "Pendaftaran berhasil! Tapi pengiriman OTP gagal, silakan coba lagi",
      succes: true,
    });
  } catch (error) {
    console.error("Registrasi gagal: ", error);
    return res.status(500).json({
      message: "Kesalahan terjadi ketika melakukan pendaftaran",
      error: error instanceof Error ? error.message : "Error tidak diketahui",
    });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp }: VerifyOTPRequest = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email dan OTP harus ada!" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        student: true,
        lecturer: true,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Akun tidak ditemukan" });
    }

    const validOTP = await prisma.oTP.findFirst({
      where: {
        code: Number(otp),
        userID: user.id,
        expiresAt: { gte: new Date() },
      },
    });

    if (!validOTP) {
      return res
        .status(400)
        .json({ message: "OTP tidak valid atau sudah kadaluwarsa" });
    }

    await prisma.$transaction([
      prisma.user.update({ where: { id: user.id }, data: { isVerify: true } }),
      prisma.oTP.delete({
        where: { id: validOTP.id },
      }),
    ]);

    const token = jwt.sign(
      { userID: user.id, email: user.email, role: user.role },
      secretKey,
      { expiresIn: "1h" }
    );

    const userData = {
      id: user.id,
      email: user.email,
      role: user.role,
      isVerified: true,
      ...(user.student || user.lecturer),
    };

    return res.json({
      message: "OTP sukses diverifikasi!",
      token,
      user: userData,
    });
  } catch (error) {
    console.error("Gagal verifikasi OTP: ", error);
    return res.status(500).json({
      message: "Kesalahan terjadi saat verifikasi OTP",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};
