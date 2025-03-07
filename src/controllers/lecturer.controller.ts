import { Request, Response } from "express";
import { LecturerService } from "../services/lecturer.service";

const lecturerService = new LecturerService();

export const getAllLecturer = async (req: Request, res: Response) => {
  try {
    const lecturers = await lecturerService.getAllLecturers();
    res.status(200).json({
      success: true,
      data: lecturers,
      message: "Berhasil mendapatkan data dosen",
    });
  } catch (error) {
    console.error("Gagal mendapatkan data dosen: ", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendapatkan data dosen",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};
export const getLecturerByNIP = async (req: Request, res: Response) => {
  try {
    const { nip } = req.params;

    const lecturer = await lecturerService.getLecturerByNIP(nip);
    res.status(200).json({
      success: true,
      data: lecturer,
      message: "Berhasil mendapatkan data dosen",
    });
  } catch (error) {
    console.error("Gagal mendapatkan data dosen: ", error);
    res
      .status(
        error instanceof Error && error.message === "Dosen tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat mendapatkan data dosen",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};
