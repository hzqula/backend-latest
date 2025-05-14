import { Request, Response, RequestHandler } from "express";
import { SeminarProposalService } from "../services/seminarProposal.service";
import { sendAssessmentEmail } from "../lib/nodemailer";
import { prisma } from "../lib/prisma";
import {
  logAssessProposalAttemp,
  logRegistrationProposalAttempt,
  logScheduleProposalAttempt,
  logUpdateSemproAttempt,
  logUploadDocSemproAttempt,
  logUpdateDocSemproAttempt,
  logUpdateAssessSemproAttempt,
} from "../middlewares/securityLogMiddleware";
import { EMAIL_PASSWORD } from "../configs/env";
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

const seminarProposalService = new SeminarProposalService();
const seminarService = new SeminarService();

export const registerProposalSeminar: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { title, advisorNIPs } = req.body;
    const studentNIM = req.user?.nim;
    console.log(req.user);
    const email = req.user?.email;

    if (!studentNIM) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "NIM tidak ditemukan";
      await logRegistrationProposalAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    logRegistrationProposalAttempt(req, res, () => {});
    req.body.reason = "Seminar proposal registered successfully";
    res.status(201).json({
      success: true,
      seminar,
      message: "Berhasil mendaftarkan seminar proposal",
    });
  } catch (error) {
    console.error("Gagal mendaftarkan seminar: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logRegistrationProposalAttempt(req, res, () => {});
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
    const email = req.user?.email;

    const seminarId = parseInt(id);
    if (isNaN(seminarId)) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Invalid seminar ID";
      await logUpdateSemproAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    logUpdateSemproAttempt(req, res, () => {});
    req.body.reason = "Seminar proposal updated successfully";
    res
      .status(200)
      .json({ success: true, seminar, message: "Seminar diperbarui" });
  } catch (error) {
    console.error("Error in updateRegisterProposalSeminar:", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logUpdateSemproAttempt(req, res, () => {});
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
    const email = req.user?.email;

    if (!file) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "No file uploaded";
      await logUploadDocSemproAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar document uploaded successfully";
    logUploadDocSemproAttempt(req, res, () => {});
    res.status(201).json({
      success: true,
      seminarDocument,
      message: "Berhasil mengunggah dokumen seminar",
    });
  } catch (error) {
    console.error("Gagal mengunggah dokumen seminar: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = "Seminar document failed uploaded";
    logUploadDocSemproAttempt(req, res, () => {});
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
    const email = req.user?.email;

    if (!file) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Tidak ada file yang diunggah";
      await logUpdateDocSemproAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar proposal document succesfuly update";
    logUpdateDocSemproAttempt(req, res, () => {});
    res.status(200).json({
      success: true,
      seminarDocument: updatedDocument,
      message: "Dokumen seminar berhasil diperbarui",
    });
  } catch (error) {
    console.error("Gagal memperbarui dokumen seminar: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = "Seminar proposal document failed update";
    logUpdateDocSemproAttempt(req, res, () => {});
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
    const email = req.user?.email;

    const seminar = await seminarProposalService.scheduleProposalSeminar(
      parseInt(seminarId),
      new Date(time),
      room,
      assessorNIPs
    );
    req.body.email = email;
    req.body.success = true;
    logScheduleProposalAttempt(req, res, () => {});
    req.body.reason = "Seminar proposal scheduled successfully";
    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil menjadwalkan seminar",
    });
  } catch (error) {
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logScheduleProposalAttempt(req, res, () => {});
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
    const email = req.user?.email;

    if (!lecturerNIP) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "NIP tidak ditemukan";
      await logAssessProposalAttemp(req, res, () => {});
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

    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar proposal assessed successfully";
    await logAssessProposalAttemp(req, res, () => {});

    // Ambil lecturerName dari tabel Lecturer
    const lecturer = await prisma.lecturer.findUnique({
      where: { nip: lecturerNIP },
      select: { name: true },
    });

    if (!lecturer) {
      throw new Error("Dosen tidak ditemukan");
    }

    // Tentukan lecturerRole
    const seminarDetailsForRole = await prisma.seminar.findUnique({
      where: { id: parseInt(id) },
      include: {
        advisors: true,
        assessors: true,
      },
    });

    if (!seminarDetailsForRole) {
      throw new Error("Seminar tidak ditemukan untuk penentuan peran");
    }

    const isAdvisor = seminarDetailsForRole.advisors.some(
      (advisor) => advisor.lecturerNIP === lecturerNIP
    );
    const lecturerRole = isAdvisor ? "ADVISOR" : "ASSESSOR";

    // Kirim email dengan riwayat penilaian ke cobaindeh@gmail.com
    try {
      const seminar = await seminarService.getSeminarDetail(parseInt(id));
      const assessmentTime = new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
      });
      if (email) {
        await sendAssessmentEmail({
          to: "adaapasihteman@gmail.com",
          seminarId: id,
          title: seminar.title,
          lecturerName: lecturer.name,
          studentNIM: seminar.student.nim,
          studentName: seminar.student.name,
          assessmentTime,
          writingScore,
          presentationScore,
          masteryScore,
          characteristicScore,
          feedback,
          seminarType: seminar.type,
          lecturerRole, // Tambahkan lecturerRole
        });
      } else {
        console.error(
          "Email dosen tidak tersedia untuk logging riwayat penilaian"
        );
      }
    } catch (emailError) {
      console.error("Gagal mengirim email riwayat penilaian:", emailError);
    }

    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil menilai seminar proposal",
    });
  } catch (error) {
    console.error("Gagal menilai seminar: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    await logAssessProposalAttemp(req, res, () => {});
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
    const email = req.user?.email;

    if (!lecturerNIP) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "NIP tidak ditemukan";
      await logUpdateAssessSemproAttempt(req, res, () => {});
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

    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar proposal assessment successfully updated";
    await logUpdateAssessSemproAttempt(req, res, () => {});

    //ambil lecturer name dari tabel lecturer
    const lecturer = await prisma.lecturer.findUnique({
      where: { nip: lecturerNIP },
      select: { name: true },
    });

    if (!lecturer) {
      throw new Error("Dosen tidak ditemukan");
    }

    // Tentukan lecturerRole
    const seminarDetailsForRole = await prisma.seminar.findUnique({
      where: { id: parseInt(id) },
      include: {
        advisors: true,
        assessors: true,
      },
    });

    if (!seminarDetailsForRole) {
      throw new Error("Seminar tidak ditemukan untuk penentuan peran");
    }

    const isAdvisor = seminarDetailsForRole.advisors.some(
      (advisor) => advisor.lecturerNIP === lecturerNIP
    );
    const lecturerRole = isAdvisor ? "ADVISOR" : "ASSESSOR";

    // Kirim email dengan riwayat pembaruan penilaian ke cobaindeh@gmail.com
    try {
      const seminarDetails = await seminarService.getSeminarDetail(
        parseInt(id)
      );
      const assessmentTime = new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
      });
      if (email) {
        await sendAssessmentEmail({
          to: "adaapasihteman@gmail.com",
          seminarId: id,
          title: seminarDetails.title,
          lecturerRole,
          lecturerName: lecturer.name,
          studentNIM: seminarDetails.student.nim,
          studentName: seminarDetails.student.name,
          assessmentTime,
          writingScore,
          presentationScore,
          masteryScore,
          characteristicScore,
          feedback,
          seminarType: seminarDetails.type,
        });
      } else {
        console.error(
          "Email dosen tidak tersedia untuk logging riwayat pembaruan penilaian"
        );
      }
    } catch (emailError) {
      console.error(
        "Gagal mengirim email riwayat pembaruan penilaian:",
        emailError
      );
    }

    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil memperbarui penilaian seminar",
    });
  } catch (error) {
    console.error("Gagal memperbarui penilaian seminar: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    await logUpdateAssessSemproAttempt(req, res, () => {});
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
