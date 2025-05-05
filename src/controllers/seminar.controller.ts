import { Request, Response, RequestHandler } from "express";
import { SeminarService } from "../services/seminar.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
    nim?: string;
    nip?: string;
  };
}

const seminarService = new SeminarService();

export const getAllSeminars: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { studentNIM, type } = req.query;
    const filters = {
      studentNIM: studentNIM as string | undefined,
      type: (type as "PROPOSAL" | "HASIL") || undefined,
    };
    const seminars = await seminarService.getAllSeminars(filters);
    res.status(200).json({
      success: true,
      seminars,
      message: "Berhasil mengambil daftar seminar",
    });
  } catch (error) {
    console.error("Gagal mengambil daftar seminar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil daftar seminar",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const getSeminarDetail: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { id } = req.params;
    const seminar = await seminarService.getSeminarDetail(parseInt(id));
    res.status(200).json({
      success: true,
      seminar,
      message: seminar
        ? "Berhasil mengambil detail seminar"
        : "Seminar tidak ditemukan",
    });
  } catch (error) {
    console.error("Gagal mengambil detail seminar:", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat mengambil detail seminar",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};
