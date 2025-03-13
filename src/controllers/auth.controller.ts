import { Request, Response } from "express";

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { AuthService } from "../services/auth.service";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../configs/env";
import { logLoginAttempt, logRegistrationAttempt, logOTPAttempt } from "../middlewares/securityLogMiddleware"; // Import middleware logging
import { prisma } from "../lib/prisma";

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
  const { email, role } = req.body;

  try {
    // Validasi input
    if (!email || !role) {
      res.status(400).json({ message: "Semua input harus terisi" });
      return;
    }

    // Periksa apakah email sudah terdaftar dan diverifikasi
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    // Periksa apakah existingUser tidak null
    if (existingUser && existingUser.isVerify) {
      res.status(400).json({ message: "Email tersebut sudah didaftarkan dan diverifikasi." });
      return;
    }

    // Lanjutkan proses pengiriman OTP
    await authService.sendOTP(email, role);

    // Respon sukses
    res.status(200).json({
      message: "OTP telah dikirim ke email Anda",
      success: true,
    });
  } catch (error) {
    console.error("Gagal mengirim OTP: ", error);

    // Respon error
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

    // Log OTP attempt (success)
    req.body.success = true;
    req.body.reason = "OTP valid";
    logOTPAttempt(req, res, () => {});

    res.status(200).json({
      message: "OTP valid",
      success: "true",
    });
  } catch (error) {
    console.error("Verifikasi OTP gagal: ", error);

    // Log OTP attempt (failed)
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
    const { email, password, nipOrNim, name, phoneNumber, role } = req.body;

    if (!email || !password || !nipOrNim || !name || !phoneNumber || !role) {
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
      role,
    });

    // Log registration attempt (success)
    req.body.success = true;
    req.body.reason = "Registration successful";
    logRegistrationAttempt(req, res, () => {});

    res.status(201).json({
      message: "Pendaftaran berhasil!",
      token,
      user,
    });
  } catch (error) {
    console.error("Pendaftaran gagal: ", error);

    // Log registration attempt (failed)
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

    // Log login attempt (success)
    req.body.success = true;
    req.body.reason = "Login successful";
    logLoginAttempt(req, res, () => {});

    res.status(200).json({
      message: "Login berhasil",
      token,
      user,
    });
  } catch (error) {
    console.error("Login gagal: ", error);

    // Log login attempt (failed)
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