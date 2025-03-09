import { Request, Response, RequestHandler } from "express";
import { SeminarService } from "../services/seminar.service";

interface AuthenticatedRequest extends Request {
  user?: { id: number; email: string; role: string; nim?: string };
}

const seminarService = new SeminarService();

export const registerProposalSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { title, advisorNIPs } = req.body;
    const studentNIM = req.user?.nim;

    if (!studentNIM) {
      res.status(403).json({
        success: false,
        message: "Forbidden: Student NIM not found",
      });
      return;
    }

    const seminar = await seminarService.registerProposalSeminar(
      title,
      advisorNIPs,
      studentNIM
    );
    res.status(201).json({
      success: true,
      seminar,
      message: "Berhasil mendaftarkan seminar proposal",
    });
  } catch (error) {
    console.error("Gagal mendaftarkan seminar: ", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendaftarkan seminar",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const uploadSeminarDocument: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { seminarId, documentType } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({
        success: false,
        message: "Tidak ada file yang diunggah",
      });
      return;
    }

    const seminarDocument = await seminarService.uploadSeminarDocument(
      parseInt(seminarId),
      documentType,
      file.buffer,
      file.originalname,
      file.mimetype
    );
    res.status(201).json({
      success: true,
      seminarDocument,
      message: "Berhasil mengunggah dokumen seminar",
    });
  } catch (error) {
    console.error("Gagal mengunggah dokumen seminar: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat mengunggah dokumen seminar",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

export const finalizeSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { seminarId, time, room, assessorNIPs } = req.body;

    const seminar = await seminarService.finalizeSeminar(
      parseInt(seminarId),
      new Date(time),
      room,
      assessorNIPs
    );
    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil menjadwalkan seminar",
    });
  } catch (error) {
    console.error("Gagal menjadwalkan seminar: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat menjadwalkan seminar",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};
