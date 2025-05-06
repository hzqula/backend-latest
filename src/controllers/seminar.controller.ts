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

export const registerProposalSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { title, advisorNIPs } = req.body;
    const studentNIM = req.user?.nim;
    console.log(req.user);

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

export const updateRegisterProposalSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { title, advisorNIPs } = req.body;

    const seminarId = parseInt(id);
    if (isNaN(seminarId)) {
      res.status(400).json({
        success: false,
        message: "ID seminar tidak valid",
      });
    }

    const seminar = await seminarService.updateRegisterProposalSeminar(
      seminarId,
      title,
      advisorNIPs
    );
    res
      .status(200)
      .json({ success: true, seminar, message: "Seminar diperbarui" });
  } catch (error) {
    console.error("Error in updateRegisterProposalSeminar:", error); // Tambahkan log
    res.status(500).json({
      success: false,
      message: "Gagal memperbarui seminar",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const uploadProposalSeminarDocument: RequestHandler = async (
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

    const seminarDocument = await seminarService.uploadProposalSeminarDocument(
      parseInt(seminarId),
      documentType,
      file.buffer,
      // file.originalname,
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

export const updateSeminarProposalDocument: RequestHandler = async (
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

    const updatedDocument = await seminarService.updateProposalSeminarDocument(
      parseInt(seminarId),
      documentType,
      file.buffer,
      // file.originalname,
      file.mimetype
    );

    res.status(200).json({
      success: true,
      seminarDocument: updatedDocument,
      message: "Dokumen seminar berhasil diperbarui",
    });
  } catch (error) {
    console.error("Gagal memperbarui dokumen seminar: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat memperbarui dokumen seminar",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

export const scheduleProposalSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { seminarId, time, room, assessorNIPs } = req.body;

    const seminar = await seminarService.scheduleProposalSeminar(
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

export const getAllSeminars: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const seminars = await seminarService.getAllSeminars();
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

// Tambahan: Get Seminar Detail
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
      message: "Berhasil mengambil detail seminar",
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

export const getSeminarByStudentNIM: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const studentNIM = req.params.nim;
    if (!studentNIM) {
      res.status(400).json({
        success: false,
        message: "NIM mahasiswa tidak ditemukan",
      });
      return;
    }
    const seminar = await seminarService.getSeminarByStudentNIM(studentNIM);
    if (!seminar) {
      res.status(200).json({
        success: true,
        seminar: null,
        message: "Belum ada seminar terdaftar untuk mahasiswa ini",
      });
      return;
    }
    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil mengambil data seminar",
    });
  } catch (error) {
    console.error("Gagal mengambil seminar:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil seminar",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const assessProposalSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { id } = req.params;
    const {
      writingScore,
      presentationScore,
      titleScore,
      guidanceScore,
      feedback,
    } = req.body;

    const lecturerNIP = req.user?.nip;

    if (!lecturerNIP) {
      res.status(403).json({
        success: false,
        message: "NIP tidak ditemukan",
      });
      return;
    }

    const seminar = await seminarService.assessProposalSeminar(
      parseInt(id),
      lecturerNIP,
      writingScore,
      presentationScore,
      titleScore,
      guidanceScore !== undefined ? guidanceScore : null, // Kirim null jika guidanceScore tidak ada
      feedback
    );

    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil menilai seminar proposal",
    });
  } catch (error) {
    console.error("Gagal menilai seminar: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat menilai seminar",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

