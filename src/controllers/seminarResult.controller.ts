import { Request, Response, RequestHandler } from "express";
import { SeminarResultService } from "../services/seminarResult.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
    nim?: string;
    nip?: string;
  };
}

const seminarResultService = new SeminarResultService();

export const registerResultSeminar: RequestHandler = async (
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

    const seminar = await seminarResultService.registerResultSeminar(
      title,
      advisorNIPs,
      studentNIM
    );
    res.status(201).json({
      success: true,
      seminar,
      message: "Berhasil mendaftarkan seminar hasil",
    });
  } catch (error) {
    console.error("Gagal mendaftarkan seminar hasil: ", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendaftarkan seminar hasil",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const updateRegisterResultSeminar: RequestHandler = async (
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

    const seminar = await seminarResultService.updateRegisterResultSeminar(
      seminarId,
      title,
      advisorNIPs
    );
    res
      .status(200)
      .json({ success: true, seminar, message: "Seminar hasil diperbarui" });
  } catch (error) {
    console.error("Error in updateRegisterResultSeminar:", error);
    res.status(500).json({
      success: false,
      message: "Gagal memperbarui seminar hasil",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const uploadResultSeminarDocument: RequestHandler = async (
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
      await seminarResultService.uploadResultSeminarDocument(
        parseInt(seminarId),
        documentType,
        file.buffer,
        file.mimetype
      );
    res.status(201).json({
      success: true,
      seminarDocument,
      message: "Berhasil mengunggah dokumen seminar hasil",
    });
  } catch (error) {
    console.error("Gagal mengunggah dokumen seminar hasil: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat mengunggah dokumen seminar hasil",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

export const updateResultSeminarDocument: RequestHandler = async (
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
      await seminarResultService.updateResultSeminarDocument(
        parseInt(seminarId),
        documentType,
        file.buffer,
        file.mimetype
      );

    res.status(200).json({
      success: true,
      seminarDocument: updatedDocument,
      message: "Dokumen seminar hasil berhasil diperbarui",
    });
  } catch (error) {
    console.error("Gagal memperbarui dokumen seminar hasil: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat memperbarui dokumen seminar hasil",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

export const scheduleResultSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { seminarId, time, room, assessorNIPs } = req.body;

    const seminar = await seminarResultService.scheduleResultSeminar(
      parseInt(seminarId),
      new Date(time),
      room,
      assessorNIPs
    );
    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil menjadwalkan seminar hasil",
    });
  } catch (error) {
    console.error("Gagal menjadwalkan seminar hasil: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat menjadwalkan seminar hasil",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

export const getResultSeminarByStudentNIM: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { nim } = req.params;
    const seminar = await seminarResultService.getResultSeminarByStudentNIM(
      nim
    );
    res.status(200).json({
      success: true,
      seminar,
      message: seminar
        ? "Berhasil mengambil seminar hasil mahasiswa"
        : "Seminar hasil tidak ditemukan untuk mahasiswa ini",
    });
  } catch (error) {
    console.error("Gagal mengambil seminar hasil mahasiswa:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil seminar hasil mahasiswa",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const assessResultSeminar: RequestHandler = async (
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

    const seminar = await seminarResultService.assessResultSeminar(
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
      message: "Berhasil menilai seminar hasil",
    });
  } catch (error) {
    console.error("Gagal menilai seminar hasil: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat menilai seminar hasil",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};

export const updateResultAssessment: RequestHandler = async (
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

    const seminar = await seminarResultService.updateResultAssessment(
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
      message: "Berhasil memperbarui penilaian seminar hasil",
    });
  } catch (error) {
    console.error("Gagal memperbarui penilaian seminar hasil: ", error);
    res
      .status(
        error instanceof Error && error.message === "Seminar tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat memperbarui penilaian seminar hasil",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};
