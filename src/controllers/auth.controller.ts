//Auth.controller.ts
import { Request, Response } from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { AuthService } from "../services/auth.service";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../configs/env";
import {
  logLoginAttempt,
  logRegistrationAttempt,
  logOTPAttempt,
} from "../middlewares/securityLogMiddleware";
import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../configs/env";
import { resetPassword } from "../controllers/reset-password.controller";

interface DecodedToken {
  userID: number;
  email: string;
  iat: number;
  exp: number;
}

const secretKey = JWT_SECRET || "bismillah-selesai";
const authService = new AuthService();

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const maxSize = 2 * 1024 * 1024;
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Hanya file gambar (JPEG, PNG) yang diperbolehkan"));
    }
    if (file.size > maxSize) {
      return cb(new Error("Ukuran file maksimum adalah 5MB"));
    }
    cb(null, true);
  },
  limits: { fileSize: 2 * 1024 * 1024 },
});

export const sendOTP = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  try {
    if (!email) {
      res.status(400).json({ message: "Email harus terisi" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser && existingUser.isVerify && !resetPassword) {
      res
        .status(400)
        .json({
          message: "Email tersebut sudah didaftarkan dan diverifikasi.",
        });
      return;
    }

    await authService.sendOTP(email);

    res.status(200).json({
      message: "OTP telah dikirim ke email Anda",
      success: true,
    });
  } catch (error) {
    console.error("Gagal mengirim OTP: ", error);
    res.status(500).json({
      message: "Kesalahan terjadi ketika mengirim OTP",
      error: error instanceof Error ? error.message : "Error tidak diketahui",
    });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      res.status(400).json({ message: "Email dan OTP harus ada!" });
      return;
    }

    await authService.verifyOTP(email, otp);

    req.body.success = true;
    req.body.reason = "OTP valid";
    logOTPAttempt(req, res, () => {});

    res.status(200).json({
      message: "OTP valid",
      success: "true",
    });
  } catch (error) {
    console.error("Verifikasi OTP gagal: ", error);

    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logOTPAttempt(req, res, () => {});

    res.status(500).json({
      message: "Kesalahan terjadi ketika verifikasi OTP",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const completeRegister = async (req: Request, res: Response) => {
  try {
    const { email, password, nipOrNim, name, phoneNumber } = req.body;

    if (!email || !password || !nipOrNim || !name || !phoneNumber) {
      res.status(400).json({ message: "Semua data harus diisi" });
      return;
    }

    let profilePicture: string | undefined;
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "profile-pictures",
            public_id: `${Date.now()}-${req.file!.originalname.split(".")[0]}`,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(req.file!.buffer);
      });
      profilePicture = (result as any).secure_url;
      console.log("Profile Picture URL:", profilePicture);
    }

    const { token, user } = await authService.completeRegister({
      email,
      password,
      nipOrNim,
      name,
      phoneNumber,
      profilePicture,
    });

    req.body.success = true;
    req.body.reason = "Registration successful";
    logRegistrationAttempt(req, res, () => {});

    res.status(201).json({
      message: "Pendaftaran berhasil!",
      token,
      user: {
        id: user.id,
        email: user.email,
        profile: user.profile,
      },
    });
  } catch (error) {
    console.error("Pendaftaran gagal: ", error);

    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logRegistrationAttempt(req, res, () => {});

    res.status(500).json({
      message: "Kesalahan terjadi ketika melakukan pendaftaran",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Email dan password harus diisi" });
      return;
    }

    const { token, user } = await authService.login(email, password);

    req.body.success = true;
    req.body.reason = "Login successful";
    logLoginAttempt(req, res, () => {});

    res.status(200).json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        email: user.email,
        profile: user.profile,
      },
    });
  } catch (error) {
    console.error("Login gagal: ", error);

    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logLoginAttempt(req, res, () => {});

    res.status(500).json({
      message: "Kesalahan terjadi ketika Login",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const verifyRole = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token tidak ditemukan" });
    }

    // Verifikasi token
    const decoded = jwt.verify(token, secretKey) as DecodedToken;
    const userId = decoded.userID;

    // Ambil role dari database
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (!user) {
      return res.status(404).json({ error: "Pengguna tidak ditemukan" });
    }

    return res.status(200).json({ role: user.role });
  } catch (error) {
    console.error("Error verifying role:", error);
    return res.status(401).json({ error: "Token tidak valid" });
  }
};
