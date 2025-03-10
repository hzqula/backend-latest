import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const resetPassword = async (req: Request, res: Response) => {
  const { email, newPassword } = req.body;

  // Validasi manual
  if (!email || !newPassword) {
    return res.status(400).json({ message: "Email dan password baru wajib diisi" });
  }

  // Cek apakah email valid
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: "Email tidak valid" });
  }

  // Validasi panjang password
  if (newPassword.length < 6) {
    return res.status(400).json({ message: "Password minimal 6 karakter" });
  }

  try {
    // Cek apakah user ada di database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "Email tidak ditemukan" });
    }

    // Hash password baru
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password user
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: "Password berhasil direset" });
  } catch (error) {
    console.error("Error saat mereset password:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};
