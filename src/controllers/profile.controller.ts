import { Request, Response } from "express";
import { StudentService } from "../services/student.service";
import { LecturerService } from "../services/lecturer.service";
import { prisma } from "../lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../configs/env";

interface DecodedToken {
  userID: number;
  email: string;
  iat: number;
  exp: number;
}

const secretKey = JWT_SECRET || "bismillah-selesai";
const studentService = new StudentService();
const lecturerService = new LecturerService();

export const updateProfilePicture = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: "Token tidak ditemukan" });
      return;
    }

    // Verifikasi token dan tangani tipe dengan aman
    let decoded;
    try {
      decoded = jwt.verify(token, secretKey) as JwtPayload & DecodedToken;
    } catch (err) {
      res.status(401).json({ error: "Token tidak valid" });
      return;
    }
    const userId = decoded.userID;

    // Ambil data pengguna
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student: true,
        lecturer: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: "Pengguna tidak ditemukan" });
      return;
    }

    // Pastikan file ada
    if (!req.file) {
      res.status(400).json({ error: "Gambar harus diunggah" });
      return;
    }

    let updatedProfile;
    if (user.student) {
      console.log(
        "Updating profile picture for student with NIM:",
        user.student.nim
      );
      updatedProfile = await studentService.updateProfilePicture(
        user.student.nim,
        req.file as Express.Multer.File
      );
    } else if (user.lecturer) {
      console.log(
        "Updating profile picture for lecturer with NIP:",
        user.lecturer.nip
      );
      updatedProfile = await lecturerService.updateProfilePicture(
        user.lecturer.nip,
        req.file as Express.Multer.File
      );
    } else {
      res.status(400).json({ error: "Role pengguna tidak ditemukan" });
      return;
    }

    // Pastikan updatedProfile ada sebelum mengirim respons
    if (!updatedProfile || !updatedProfile.profilePicture) {
      res.status(500).json({ error: "Gagal memperbarui gambar profil" });
      return;
    }

    res.status(200).json({
      message: "Gambar profil berhasil diperbarui",
      profilePicture: updatedProfile.profilePicture,
    });
  } catch (error) {
    console.error("Gagal memperbarui gambar profil:", error);
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};
