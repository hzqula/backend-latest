import {
  Seminar,
  DocumentType,
} from "../../prisma/app/generated/prisma/client";
import {
  createFolder,
  deleteFileFromDrive,
  uploadFileToDrive,
} from "./googleDrive.service";
import { BASE_FOLDER_ID } from "../configs/env";
import { prisma } from "../lib/prisma";
import { SeminarService } from "./seminar.service";

export class SeminarProposalService {
  async registerProposalSeminar(
    title: string,
    advisorNIPs: string[],
    studentNIM: string
  ): Promise<Seminar> {
    const existingSeminar = await prisma.seminar.findFirst({
      where: { studentNIM, type: "PROPOSAL" },
    });
    if (existingSeminar) {
      throw new Error("Seminar dengan judul ini sudah terdaftar sebagai draft");
    }

    const student = await prisma.student.findUnique({
      where: { nim: studentNIM },
    });

    if (!student) throw new Error("Mahasiswa tidak ditemukan");

    const folderName = `[SEMINAR PROPOSAL] ${student.name} - ${studentNIM}`;
    const baseFolderId = BASE_FOLDER_ID;
    const folderId = await createFolder(folderName, baseFolderId);

    return prisma.seminar.create({
      data: {
        type: "PROPOSAL",
        title,
        status: "DRAFT",
        studentNIM,
        folderId,
        advisors: {
          create: advisorNIPs.map((nip) => ({ lecturerNIP: nip })),
        },
      },
      include: { advisors: true },
    });
  }

  async updateRegisterProposalSeminar(
    seminarId: number,
    title: string,
    advisorNIPs: string[]
  ): Promise<Seminar> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
    });
    if (!seminar) throw new Error("Seminar tidak ditemukan");
    if (seminar.status !== "DRAFT" && seminar.status !== "SUBMITTED")
      throw new Error(
        "Hanya seminar yang masih DRAFT atau SUBMITTED yang bisa di-edit"
      );

    return prisma.seminar.update({
      where: { id: seminarId },
      data: {
        title,
        advisors: {
          deleteMany: {},
          create: advisorNIPs.map((nip) => ({ lecturerNIP: nip })),
        },
      },
      include: { advisors: true },
    });
  }

  async uploadProposalSeminarDocument(
    seminarId: number,
    documentType: DocumentType,
    file: Buffer,
    mimeType: string
  ): Promise<any> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
      include: { documents: true, student: true },
    });
    if (!seminar) throw new Error("Seminar tidak ditemukan");
    if (seminar.status !== "DRAFT" && seminar.status !== "SUBMITTED")
      throw new Error(
        "Dokumen hanya bisa diunggah pada seminar dengan status DRAFT"
      );

    const folderId = seminar.folderId;
    if (!folderId)
      throw new Error("Folder Google Drive untuk seminar ini belum dibuat");

    const fixFileName = SeminarService.getFixFileName(
      documentType,
      seminar.student.name,
      seminar.studentNIM
    );

    const fileURL = await uploadFileToDrive(
      file,
      fixFileName,
      mimeType,
      folderId
    );
    console.log(`File uploaded to Drive: ${fileURL}`);

    const newDocument = await prisma.seminarDocument.create({
      data: {
        seminarID: seminarId,
        documentType,
        fileName: fixFileName,
        fileURL,
      },
    });

    const updatedSeminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
      include: { documents: true },
    });

    const requiredDocs: DocumentType[] = [
      "ADVISOR_AVAILABILITY",
      "KRS",
      "ADVISOR_ASSISTANCE",
      "SEMINAR_ATTENDANCE",
      "THESIS_PROPOSAL",
    ];

    const uploadedDocs = updatedSeminar!.documents.map(
      (doc) => doc.documentType
    );
    const allDocsUploaded = requiredDocs.every((doc) =>
      uploadedDocs.includes(doc)
    );

    if (allDocsUploaded) {
      console.log(`All documents uploaded, updating status to SUBMITTED`);
      await prisma.seminar.update({
        where: { id: seminarId },
        data: { status: "SUBMITTED" },
      });
    }

    return newDocument;
  }

  async updateProposalSeminarDocument(
    seminarId: number,
    documentType: DocumentType,
    file: Buffer,
    mimeType: string
  ): Promise<any> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
      include: { documents: true, student: true },
    });
    if (!seminar) throw new Error("Seminar tidak ditemukan");
    if (seminar.status !== "SUBMITTED")
      throw new Error(
        "Dokumen hanya bisa diubah pada seminar dengan status SUBMITTED"
      );

    const existingDocs = seminar.documents.find(
      (doc) => doc.documentType === documentType
    );

    if (!existingDocs)
      throw new Error(`Dokumen ${documentType} belum diunggah`);

    const folderId = seminar.folderId;
    if (!folderId)
      throw new Error("Folder Google Drive untuk seminar ini belum dibuat");

    const fileId = existingDocs?.fileURL.split("/d/")[1]?.split("/")[0];
    if (fileId) {
      await deleteFileFromDrive(fileId);
      console.log(`Deleted old file: ${fileId}`);
    }

    const fixFileName = SeminarService.getFixFileName(
      documentType,
      seminar.student.name,
      seminar.studentNIM
    );

    const fileURL = await uploadFileToDrive(
      file,
      fixFileName,
      mimeType,
      folderId
    );

    console.log(`New file uploaded to Drive: ${fileURL}`);

    const updatedDocument = await prisma.seminarDocument.update({
      where: { id: existingDocs.id },
      data: {
        fileName: fixFileName,
        fileURL,
      },
    });

    return updatedDocument;
  }

  async scheduleProposalSeminar(
    seminarId: number,
    time: Date,
    room: string,
    assessorNIPs: string[]
  ): Promise<Seminar> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
      include: { documents: true },
    });

    if (!seminar) {
      throw new Error("Seminar tidak ditemukan");
    }

    if (seminar.type !== "PROPOSAL") {
      throw new Error("Hanya seminar proposal yang bisa dijadwalkan");
    }

    const requiredDocs: DocumentType[] = [
      "ADVISOR_AVAILABILITY",
      "KRS",
      "ADVISOR_ASSISTANCE",
      "SEMINAR_ATTENDANCE",
      "THESIS_PROPOSAL",
    ];
    const uploadedDocs = seminar.documents.map((doc) => doc.documentType);
    const missingDocs = requiredDocs.filter(
      (doc) => !uploadedDocs.includes(doc)
    );

    if (missingDocs.length > 0) {
      throw new Error(`Dokumen wajib belum lengkap: ${missingDocs.join(", ")}`);
    }

    return prisma.seminar.update({
      where: { id: seminarId },
      data: {
        time,
        room,
        status: "SCHEDULED",
        assessors: {
          create: assessorNIPs.map((nip) => ({ lecturerNIP: nip })),
        },
      },
      include: { advisors: true, assessors: true, documents: true },
    });
  }

  async assessProposalSeminar(
    seminarId: number,
    lecturerNIP: string,
    writingScore: number,
    presentationScore: number,
    masteryScore: number,
    characteristicScore: number | null,
    feedback?: string
  ): Promise<Seminar> {
    const seminar = await prisma.seminar.findUnique({
      where: {
        id: seminarId,
      },
      include: {
        advisors: { include: { lecturer: true } },
        assessors: { include: { lecturer: true } },
        assessments: {
          select: {
            lecturerNIP: true,
            lecturer: {
              select: {
                nip: true,
                name: true,
                phoneNumber: true,
                profilePicture: true,
              },
            },
          },
        },
      },
    });

    if (!seminar) throw new Error("Seminar tidak ditemukan");
    if (seminar.type !== "PROPOSAL" || seminar.status !== "SCHEDULED")
      throw new Error(
        "Hanya seminar proposal dengan status SCHEDULED yang bisa dinilai"
      );

    const isAdvisor = seminar.advisors.some(
      (advisor) => advisor.lecturerNIP === lecturerNIP
    );
    const isAssessor = seminar.assessors.some(
      (assessor) => assessor.lecturerNIP === lecturerNIP
    );

    if (!isAdvisor && !isAssessor)
      throw new Error("Anda tidak berwenang untuk menilai seminar ini");

    const lecturerRole = isAdvisor ? "ADVISOR" : "ASSESSOR";
    const finalScore = SeminarService.validateScores(
      writingScore,
      presentationScore,
      masteryScore,
      characteristicScore,
      lecturerRole
    );

    const existingAssessment = seminar.assessments.find(
      (assessment) => assessment.lecturerNIP === lecturerNIP
    );

    if (existingAssessment) {
      throw new Error("Anda sudah menilai seminar ini");
    }

    await prisma.assessment.create({
      data: {
        seminarID: seminarId,
        lecturerNIP,
        lecturerRole,
        writingScore,
        presentationScore,
        masteryScore,
        characteristicScore:
          lecturerRole === "ADVISOR" ? characteristicScore : null,
        finalScore,
        feedback,
      },
    });

    const totalEvaluators = seminar.advisors.length + seminar.assessors.length;
    const assessmentsCount = seminar.assessments.length + 1;

    const allAssess = assessmentsCount === totalEvaluators;

    if (allAssess) {
      return prisma.seminar.update({
        where: {
          id: seminarId,
        },
        data: {
          status: "COMPLETED",
        },
        include: {
          advisors: { include: { lecturer: true } },
          assessors: { include: { lecturer: true } },
          assessments: {
            select: {
              writingScore: true,
              presentationScore: true,
              masteryScore: true,
              characteristicScore: true,
              finalScore: true,
              feedback: true,
              lecturerNIP: true,
              lecturer: {
                select: {
                  nip: true,
                  name: true,
                  phoneNumber: true,
                  profilePicture: true,
                },
              },
            },
          },
          student: true,
        },
      });
    }

    return prisma.seminar.findUnique({
      where: { id: seminarId },
      include: {
        advisors: { include: { lecturer: true } },
        assessors: { include: { lecturer: true } },
        assessments: {
          select: {
            writingScore: true,
            presentationScore: true,
            masteryScore: true,
            characteristicScore: true,
            finalScore: true,
            feedback: true,
            lecturerNIP: true,
            lecturer: {
              select: {
                nip: true,
                name: true,
                phoneNumber: true,
                profilePicture: true,
              },
            },
          },
        },
        student: true,
      },
    }) as Promise<Seminar>;
  }

  async updateAssessment(
    seminarId: number,
    lecturerNIP: string,
    writingScore: number,
    presentationScore: number,
    masteryScore: number,
    characteristicScore: number | null,
    feedback?: string
  ): Promise<Seminar> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
      include: {
        advisors: { include: { lecturer: true } },
        assessors: { include: { lecturer: true } },
        assessments: {
          select: {
            id: true,
            lecturerNIP: true,
            createdAt: true,
            lecturer: {
              select: {
                nip: true,
                name: true,
                phoneNumber: true,
                profilePicture: true,
              },
            },
          },
        },
      },
    });

    if (!seminar) throw new Error("Seminar tidak ditemukan");
    if (seminar.type !== "PROPOSAL") {
      throw new Error(
        "Hanya seminar proposal yang bisa diperbarui penilaiannya"
      );
    }

    const existingAssessment = seminar.assessments.find(
      (assessment) => assessment.lecturerNIP === lecturerNIP
    );
    if (!existingAssessment) {
      throw new Error("Penilaian tidak ditemukan untuk dosen ini");
    }

    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
    const now = new Date();
    const assessmentDate = new Date(existingAssessment.createdAt);
    if (now.getTime() - assessmentDate.getTime() > oneWeekInMs) {
      throw new Error("Batas waktu untuk memperbarui penilaian telah habis");
    }

    const isAdvisor = seminar.advisors.some(
      (advisor) => advisor.lecturerNIP === lecturerNIP
    );
    const isAssessor = seminar.assessors.some(
      (assessor) => assessor.lecturerNIP === lecturerNIP
    );

    if (!isAdvisor && !isAssessor) {
      throw new Error("Anda tidak berwenang untuk memperbarui penilaian ini");
    }

    const lecturerRole = isAdvisor ? "ADVISOR" : "ASSESSOR";
    const finalScore = SeminarService.validateScores(
      writingScore,
      presentationScore,
      masteryScore,
      characteristicScore,
      lecturerRole
    );

    await prisma.assessment.update({
      where: { id: existingAssessment.id },
      data: {
        writingScore,
        presentationScore,
        masteryScore,
        characteristicScore:
          lecturerRole === "ADVISOR" ? characteristicScore : null,
        finalScore,
        feedback,
      },
    });

    return prisma.seminar.findUnique({
      where: { id: seminarId },
      include: {
        advisors: { include: { lecturer: true } },
        assessors: { include: { lecturer: true } },
        assessments: {
          select: {
            writingScore: true,
            presentationScore: true,
            masteryScore: true,
            characteristicScore: true,
            finalScore: true,
            feedback: true,
            lecturerNIP: true,
            createdAt: true,
            lecturer: {
              select: {
                nip: true,
                name: true,
                phoneNumber: true,
                profilePicture: true,
              },
            },
          },
        },
        student: true,
      },
    }) as Promise<Seminar>;
  }

  async getProposalSeminarByStudentNIM(
    studentNIM: string
  ): Promise<Seminar | null> {
    const seminar = await prisma.seminar.findFirst({
      where: {
        studentNIM,
        type: "PROPOSAL",
      },
      include: {
        student: {
          select: {
            nim: true,
            name: true,
            phoneNumber: true,
            profilePicture: true,
          },
        },
        advisors: {
          include: {
            lecturer: {
              select: {
                nip: true,
                name: true,
                phoneNumber: true,
                profilePicture: true,
              },
            },
          },
        },
        assessors: {
          include: {
            lecturer: {
              select: {
                nip: true,
                name: true,
                phoneNumber: true,
                profilePicture: true,
              },
            },
          },
        },
        documents: {
          select: {
            documentType: true,
            fileName: true,
            fileURL: true,
          },
        },
        assessments: {
          select: {
            writingScore: true,
            presentationScore: true,
            masteryScore: true,
            characteristicScore: true,
            finalScore: true,
            feedback: true,
            lecturerNIP: true,
            lecturer: {
              select: {
                nip: true,
                name: true,
                phoneNumber: true,
                profilePicture: true,
              },
            },
          },
        },
      },
    });

    return seminar;
  }


  async getSeminarDetails(seminarId: number) {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
      select: {
        id: true,
        title: true,
        studentNIM: true,
        type: true,
         student: {
          select: {
            name: true, // Tambahkan name dari Student
          },
        },
      },
    });

    if (!seminar) {
      throw new Error("Seminar tidak ditemukan");
    }

    return {
      id: seminar.id,
      title: seminar.title,
      studentNIM: seminar.studentNIM,
      type: seminar.type,
      seminarName : seminar.student.name
    };
  }
}