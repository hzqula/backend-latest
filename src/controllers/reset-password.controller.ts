import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { logResetPasswordAttempt } from "../middlewares/securityLogMiddleware";

const prisma = new PrismaClient();

// Middleware untuk menambahkan data logging ke req.body
const addResetPasswordLogData = (req: Request, res: Response, next: NextFunction) => {
  const { email, newPassword } = req.body;

  // Validasi manual
  if (!email || !newPassword) {
    req.body.success = false;
    req.body.reason = "Email dan password baru wajib diisi";
    return res.status(400).json({ message: req.body.reason });
  }

  // Cek apakah email valid
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    req.body.success = false;
    req.body.reason = "Email tidak valid";
    return res.status(400).json({ message: req.body.reason });
  }

  // Validasi panjang password
  if (newPassword.length < 6) {
    req.body.success = false;
    req.body.reason = "Password minimal 6 karakter";
    return res.status(400).json({ message: req.body.reason });
  }

  req.body.success = true; // Akan diubah jika ada error
  next();
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, newPassword } = req.body;

  try {
    // Cek apakah user ada di database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      req.body.success = false;
      req.body.reason = "Email tidak ditemukan";
      return res.status(404).json({ message: req.body.reason });
    }

    // Cek apakah password baru sama dengan password lama
    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      req.body.success = false;
      req.body.reason = "Password baru tidak boleh sama dengan passwor d lama";
      return res.status(400).json({ message: req.body.reason });
    }

    // Hash password baru
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password user
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    req.body.success = true;
    logResetPasswordAttempt(req, res, () => {});
    req.body.reason = "Password berhasil direset";
    res.status(200).json({ message: "Password berhasil direset" });
  } catch (error) {
    console.error("Error saat mereset password:", error);
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logResetPasswordAttempt(req, res, () => {});
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

