//auth.services.ts
import { User, UserRole, OTP } from "@prisma/client";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendOTPEmail } from "../lib/nodemailer";
import { StudentService } from "./student.service";
import { LecturerService } from "./lecturer.service";
import { JWT_SECRET } from "../configs/env";
import { resetPassword } from "../controllers/reset-password.controller";

const studentService = new StudentService();
const lecturerService = new LecturerService();
const secretKey = JWT_SECRET || "semoga-berkah-24";

interface RegisterData {
  email: string;
  password: string;
  nipOrNim: string;
  name: string;
  phoneNumber: string;
  profilePicture?: string;
}

export class AuthService {
  async sendOTP(email: string): Promise<void> {
    if (
      !email.endsWith("@student.unri.ac.id") &&
      !email.endsWith("@lecturer.unri.ac.id")
    ) {
      throw new Error(
        "Gunakan email kampus UR (student.unri.ac.id atau lecturer.unri.ac.id)"
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser && existingUser.isVerify && !resetPassword) {
      throw new Error("Email tersebut sudah didaftarkan yaa");
    }

    let tempUser = existingUser;
    if (!existingUser) {
      // Tentukan role berdasarkan email
      let role: UserRole;
      if (email.endsWith("@student.unri.ac.id")) {
        role = UserRole.STUDENT;
      } else if (email.endsWith("@lecturer.unri.ac.id")) {
        role = UserRole.LECTURER;
      } else {
        throw new Error("Email tidak sesuai dengan role yang valid");
      }

      tempUser = await prisma.user.create({
        data: {
          email,
          password: "",
          isVerify: false,
          role, // Tambahkan role ke data
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

    console.log("OTP Code:", otpCode);

    const emailSent = await sendOTPEmail(email, otpCode);
    if (!emailSent && !existingUser) {
      await prisma.user.delete({ where: { id: tempUser!.id } });
      throw new Error("Gagal mengirim OTP, silakan coba lagi");
    }
  }

  async verifyOTP(email: string, otp: string): Promise<void> {
    const tempUser = await prisma.user.findUnique({
      where: { email },
      include: {
        otp: {
          where: { expiresAt: { gte: new Date() } },
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!tempUser || tempUser.otp.length === 0) {
      throw new Error("OTP tidak valid atau sudah kadaluwarsa");
    }

    const validOTP = tempUser.otp[0];
    if (validOTP.code !== parseInt(otp)) {
      throw new Error("Kode OTP tidak valid");
    }
  }

  async completeRegister(
    data: RegisterData
  ): Promise<{ token: string; user: any }> {
    const {
      email,
      password,
      nipOrNim,
      name,
      phoneNumber,
      profilePicture,
    } = data;

    const tempUser = await prisma.user.findUnique({
      where: { email },
      include: { otp: true },
    });

    if (!tempUser) {
      throw new Error("Email tidak ditemukan, silakan daftar ulang");
    }

    let role: UserRole;
    if (email.endsWith("@student.unri.ac.id")) {
      role = UserRole.STUDENT;
      const existingStudent = await prisma.student.findUnique({
        where: { nim: nipOrNim },
      });
      if (existingStudent) throw new Error("NIM sudah digunakan");
    } else if (email.endsWith("@lecturer.unri.ac.id")) {
      role = UserRole.LECTURER;
      const existingLecturer = await prisma.lecturer.findUnique({
        where: { nip: nipOrNim },
      });
      if (existingLecturer) throw new Error("NIP sudah digunakan");
    } else {
      throw new Error("Email tidak sesuai dengan role yang valid");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.$transaction(async (prisma) => {
      await prisma.oTP.deleteMany({ where: { userID: tempUser.id } });

      let profileData;
      if (role === UserRole.STUDENT) {
        profileData = await studentService.createStudent({
          nim: nipOrNim,
          name,
          phoneNumber,
          profilePicture,
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
        profileData = await lecturerService.createLecturer({
          nip: nipOrNim,
          name,
          phoneNumber,
          profilePicture,
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
      { userID: result.user.id, email: result.user.email, role },
      secretKey,
      { expiresIn: "1h" }
    );

    return {
      token,
      user: {
        id: result.user.id,
        email: result.user.email,
        profile: result.profile,
      },
    };
  }

  async login(
    email: string,
    password: string
  ): Promise<{ token: string; user: any }> {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { student: true, lecturer: true, coordinator: true },
    });
    if (!user) throw new Error("Email atau password yang dimasukkan salah");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Password yang dimasukkan salah");

    let profile;
    let role: UserRole;
    if (user.student) {
      profile = user.student;
      role = UserRole.STUDENT;
    } else if (user.lecturer) {
      profile = user.lecturer;
      role = UserRole.LECTURER;
    } else if (user.coordinator) {
      profile = user.coordinator;
      role = UserRole.COORDINATOR;
    } else {
      throw new Error("Role pengguna tidak ditemukan");
    }

    const token = jwt.sign(
      {
        userID: user.id,
        email: user.email,
        role,
        nim: user.student?.nim,
        nip: user.lecturer?.nip,
      },
      secretKey,
      { expiresIn: "1h" }
    );

    return {
      token,
      user: { id: user.id, email: user.email, profile },
    };
  }
}