// profile.controller.ts
import { Request, Response } from "express";
import { StudentService } from "../services/student.service";
import { LecturerService } from "../services/lecturer.service";
import { prisma } from "../lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../configs/env";

interface DecodedToken {
  userID: number;
  email: string;
  role: string;
  nim?: string;
  nip?: string;
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

    let decoded;
    try {
      decoded = jwt.verify(token, secretKey) as JwtPayload & DecodedToken;
    } catch (err) {
      res.status(401).json({ error: "Token tidak valid" });
      return;
    }
    const userId = decoded.userID;

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

    if (!req.file) {
      res.status(400).json({ error: "Gambar harus diunggah" });
      return;
    }

    let updatedProfile;
    if (user.student) {
      updatedProfile = await studentService.updateProfilePicture(
        user.student.nim,
        req.file as Express.Multer.File
      );
    } else if (user.lecturer) {
      updatedProfile = await lecturerService.updateProfilePicture(
        user.lecturer.nip,
        req.file as Express.Multer.File
      );
    } else {
      res.status(400).json({ error: "Role pengguna tidak ditemukan" });
      return;
    }

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

export const updateProfileData = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: "Token tidak ditemukan" });
      return;
    }

    let decoded;
    try {
      decoded = jwt.verify(token, secretKey) as JwtPayload & DecodedToken;
    } catch (err) {
      res.status(401).json({ error: "Token tidak valid" });
      return;
    }
    const userId = decoded.userID;

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

    const { name, phoneNumber, nim, nip } = req.body;

    if (!name || !phoneNumber || (!nim && !nip)) {
      res.status(400).json({ error: "Semua data harus diisi" });
      return;
    }

    let updatedProfile;
    if (user.student) {
      if (nim && nim !== user.student.nim) {
        const existingStudent = await prisma.student.findUnique({
          where: { nim },
        });
        if (existingStudent) throw new Error("NIM sudah digunakan");
      }
      updatedProfile = await studentService.updateProfileData(
        user.student.nim,
        { name, phoneNumber, nim }
      );
    } else if (user.lecturer) {
      if (nip && nip !== user.lecturer.nip) {
        const existingLecturer = await prisma.lecturer.findUnique({
          where: { nip },
        });
        if (existingLecturer) throw new Error("NIP sudah digunakan");
      }
      updatedProfile = await lecturerService.updateProfileData(
        user.lecturer.nip,
        { name, phoneNumber, nip }
      );
    } else {
      res.status(400).json({ error: "Role pengguna tidak ditemukan" });
      return;
    }

    res.status(200).json({
      message: "Profil berhasil diperbarui",
      profile: updatedProfile,
    });
  } catch (error) {
    console.error("Gagal memperbarui profil:", error);
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};
