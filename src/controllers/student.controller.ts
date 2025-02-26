import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany({});

    return res.status(200).json({
      success: true,
      data: students,
      message: "Berhasil mendapatkan data mahasiswa",
    });
  } catch (error) {
    console.error("Gagal mendapatkan data mahasiswa: ", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendapatkan data mahasiswa",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const getStudentByNIM = async (req: Request, res: Response) => {
  try {
    const { nim } = req.params;

    const student = await prisma.student.findUnique({
      where: { nim: nim },
      include: { user: { select: { email: true, role: true } } },
    });

    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Mahasiswa tidak ditemukan" });
    }

    return res.status(200).json({
      success: true,
      data: student,
      message: "Berhasil mendapatkan data mahasiswa",
    });
  } catch (error) {
    console.error("Gagal mendapatkan data mahasiswa: ", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendapatkan data mahasiswa",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};
