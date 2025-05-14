import { Request, Response, RequestHandler } from "express";
import { sendAssessmentEmail } from "../lib/nodemailer";
import { prisma } from "../lib/prisma";
import { SeminarResultService } from "../services/seminarResult.service";
import { 
  logRegistrationResultAttempt,
  logUpdateSemhasAttempt,
  logScheduleResultAttempt,
  logAssessResultAttempt,
  logUpdateAssessSemhasAttempt, 
  logUploadDocSemhasAttempt,
  logUpdateDocSemhasAttempt,
} from "../middlewares/securityLogMiddleware";

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
    const email = req.user?.email;
    console.log(req.user);

    if (!studentNIM) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Student NIM not found";
      await logRegistrationResultAttempt(req, res, () => {}) ;
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
    req.body.email = email;
    req.body.succes = true;
    req.body.reason = "Seminar hasil registered successfully";
    logRegistrationResultAttempt(req, res, () => {});
    res.status(201).json({
      success: true,
      seminar,
      message: "Berhasil mendaftarkan seminar hasil",
    });
  } catch (error) {
    console.error("Gagal mendaftarkan seminar hasil: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logRegistrationResultAttempt(req, res, () => {});
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
    const email = req.user?.email;

    const seminarId = parseInt(id);
    if (isNaN(seminarId)) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Invalid seminar ID";
      await logUpdateSemhasAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar hasil updated successfully";
    logUpdateSemhasAttempt(req, res, () => {});
    res
      .status(200)
      .json({ success: true, seminar, message: "Seminar hasil diperbarui" });
  } catch (error) {
    console.error("Error in updateRegisterResultSeminar:", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logUpdateSemhasAttempt(req, res, () => {});
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
    const email = req.user?.email;

    if (!file) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "No file uploaded";
      await logUploadDocSemhasAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar hasil document uploaded successfully";
    logUploadDocSemhasAttempt(req, res, () => {});
    res.status(201).json({
      success: true,
      seminarDocument,
      message: "Berhasil mengunggah dokumen seminar hasil",
    });
  } catch (error) {
    console.error("Gagal mengunggah dokumen seminar hasil: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logUploadDocSemhasAttempt(req, res, () => {});
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
    const email = req.user?.email;

    if (!file) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "No file uploaded";
      await logUpdateDocSemhasAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar hasil document updated successfully";
    logUpdateDocSemhasAttempt(req, res, () => {});
    res.status(200).json({
      success: true,
      seminarDocument: updatedDocument,
      message: "Dokumen seminar hasil berhasil diperbarui",
    });
  } catch (error) {
    console.error("Gagal memperbarui dokumen seminar hasil: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logUpdateDocSemhasAttempt(req, res, () => {});
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
    const email = req.user?.email;

    const seminar = await seminarResultService.scheduleResultSeminar(
      parseInt(seminarId),
      new Date(time),
      room,
      assessorNIPs
    );
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar hasil scheduled successfully";
    logScheduleResultAttempt(req, res, () => {});
    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil menjadwalkan seminar hasil",
    });
  } catch (error) {
    console.error("Gagal menjadwalkan seminar hasil: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logScheduleResultAttempt(req, res, () => {});
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
    const email = req.user?.email;

    if (!lecturerNIP) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "NIP not found";
      await logAssessResultAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar hasil assessed successfully";
    logAssessResultAttempt(req, res, () => {});


    //ambil lecturer name dari tabel lecturer
        const lecturer = await prisma.lecturer.findUnique({
          where: { nip: lecturerNIP },
          select : {name : true},
        });
    
        if (!lecturer){
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
          const seminarDetails = await seminarResultService.getSeminarDetails(parseInt(id));
          const assessmentTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
          if (email) {
            await sendAssessmentEmail({
              to: "adaapasihteman@gmail.com",
              seminarId: id,
              title: seminarDetails.title,
              lecturerRole,
              lecturerName: lecturer.name,        
              studentNIM: seminarDetails.studentNIM,
              studentName: seminarDetails.seminarName,
              assessmentTime,
              writingScore,
              presentationScore,
              masteryScore,
              characteristicScore,
              feedback,
              seminarType: seminarDetails.type,
            });
          } else {
            console.error('Email dosen tidak tersedia untuk logging riwayat pembaruan penilaian');
          }
        } catch (emailError) {
          console.error('Gagal mengirim email riwayat pembaruan penilaian:', emailError);
        }


    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil menilai seminar hasil",
    });
  } catch (error) {
    console.error("Gagal menilai seminar hasil: ", error);
    req.body.email = req.user?.email;
    req.body.succes = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logAssessResultAttempt(req, res, () => {});
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
    const email = req.user?.email;

    if (!lecturerNIP) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "NIP not found";
      await logUpdateAssessSemhasAttempt(req, res, () => {});
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
    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Seminar hasil assessment updated successfully";
    logUpdateAssessSemhasAttempt(req, res, () => {});



    //ambil lecturer name dari tabel lecturer
        const lecturer = await prisma.lecturer.findUnique({
          where: { nip: lecturerNIP },
          select : {name : true},
        });
    
        if (!lecturer){
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
          const seminarDetails = await seminarResultService.getSeminarDetails(parseInt(id));
          const assessmentTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
          if (email) {
            await sendAssessmentEmail({
              to: "adaapasihteman@gmail.com",
              seminarId: id,
              title: seminarDetails.title,
              lecturerRole,
              lecturerName: lecturer.name,        
              studentNIM: seminarDetails.studentNIM,
              studentName: seminarDetails.seminarName,
              assessmentTime,
              writingScore,
              presentationScore,
              masteryScore,
              characteristicScore,
              feedback,
              seminarType: seminarDetails.type,
            });
          } else {
            console.error('Email dosen tidak tersedia untuk logging riwayat pembaruan penilaian');
          }
        } catch (emailError) {
          console.error('Gagal mengirim email riwayat pembaruan penilaian:', emailError);
        }


    res.status(200).json({
      success: true,
      seminar,
      message: "Berhasil memperbarui penilaian seminar hasil",
    });
  } catch (error) {
    console.error("Gagal memperbarui penilaian seminar hasil: ", error);
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    logUpdateAssessSemhasAttempt(req, res, () => {});
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