import { Request, Response } from "express";
import { StudentService } from "../services/student.service";

const studentService = new StudentService();

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json({
      success: true,
      data: students,
      message: "Berhasil mendapatkan data mahasiswa",
    });
  } catch (error) {
    console.error("Gagal mendapatkan data mahasiswa: ", error);
    res.status(500).json({
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
    const student = await studentService.getStudentByNIM(nim);
    res.status(200).json({
      success: true,
      data: student,
      message: "Berhasil mendapatkan data mahasiswa",
    });
  } catch (error) {
    console.error("Gagal mendapatkan data mahasiswa: ", error);
    res
      .status(
        error instanceof Error && error.message === "Mahasiswa tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat mendapatkan data mahasiswa",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};
