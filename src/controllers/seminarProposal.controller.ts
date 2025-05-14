import { Request, Response, RequestHandler } from "express";
import { SeminarProposalService } from "../services/seminarProposal.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
    nim?: string;
    nip?: string;
  };
}

const seminarProposalService = new SeminarProposalService();

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

    const seminar = await seminarProposalService.registerProposalSeminar(
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

    const seminar = await seminarProposalService.updateRegisterProposalSeminar(
      seminarId,
      title,
      advisorNIPs
    );
    res
      .status(200)
      .json({ success: true, seminar, message: "Seminar diperbarui" });
  } catch (error) {
    console.error("Error in updateRegisterProposalSeminar:", error);
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

    const seminarDocument =
      await seminarProposalService.uploadProposalSeminarDocument(
        parseInt(seminarId),
        documentType,
        file.buffer,
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

    const updatedDocument =
      await seminarProposalService.updateProposalSeminarDocument(
        parseInt(seminarId),
        documentType,
        file.buffer,
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

    const seminar = await seminarProposalService.scheduleProposalSeminar(
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

export const updateProposalSeminarSchedule: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { seminarId, time, room, assessorNIPs } = req.body;

    const seminar = await seminarProposalService.updateProposalSeminarSchedule(
      parseInt(seminarId),
      new Date(time),
      room,
      assessorNIPs
    );
    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil memperbarui jadwal seminar",
    });
  } catch (error) {
    console.error("Gagal memperbarui jadwal seminar: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat memperbarui jadwal seminar",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

export const getProposalSeminarByStudentNIM: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { nim } = req.params;
    const seminar = await seminarProposalService.getProposalSeminarByStudentNIM(
      nim
    );
    res.status(200).json({
      success: true,
      seminar,
      message: seminar
        ? "Berhasil mengambil seminar mahasiswa"
        : "Seminar tidak ditemukan untuk mahasiswa ini",
    });
  } catch (error) {
    console.error("Gagal mengambil seminar mahasiswa:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil seminar mahasiswa",
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
      masteryScore,
      characteristicScore,
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

    const seminar = await seminarProposalService.assessProposalSeminar(
      parseInt(id),
      lecturerNIP,
      writingScore,
      presentationScore,
      masteryScore,
      characteristicScore !== undefined ? characteristicScore : null,
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

export const updateAssessment: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { id } = req.params;
    const {
      writingScore,
      presentationScore,
      masteryScore,
      characteristicScore,
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

    const seminar = await seminarProposalService.updateAssessment(
      parseInt(id),
      lecturerNIP,
      writingScore,
      presentationScore,
      masteryScore,
      characteristicScore !== undefined ? characteristicScore : null,
      feedback
    );

    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil memperbarui penilaian seminar",
    });
  } catch (error) {
    console.error("Gagal memperbarui penilaian seminar: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat memperbarui penilaian seminar",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};
