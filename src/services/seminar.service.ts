import {
  Seminar,
  DocumentType,
} from "../../prisma/app/generated/prisma/client";
import { prisma } from "../lib/prisma";

export class SeminarService {
  static getFixFileName(
    documentType: DocumentType,
    studentName: string,
    studentNIM: string
  ): string {
    switch (documentType) {
      case "THESIS_PROPOSAL":
        return `[Proposal Tugas Akhir] ${studentName} - ${studentNIM}.pdf`;
      case "ADVISOR_AVAILABILITY":
        return `[Kesediaan Pembimbing] ${studentName} - ${studentNIM}.pdf`;
      case "KRS":
        return `[Kartu Rencana Studi] ${studentName} - ${studentNIM}.pdf`;
      case "ADVISOR_ASSISTANCE":
        return `[Asistensi Pembimbing] ${studentName} - ${studentNIM}.pdf`;
      case "SEMINAR_ATTENDANCE":
        return `[Kehadiran Seminar] ${studentName} - ${studentNIM}.pdf`;
      case "FREE_THEORY_CERTIFICATE":
        return `[Surat Bebas Teori] ${studentName} - ${studentNIM}.pdf`;
      case "ADVISOR_APPROVAL":
        return `[Persetujuan Pembimbing] ${studentName} - ${studentNIM}.pdf`;
      case "EXAMINER_APPROVAL":
        return `[Persetujuan Penguji] ${studentName} - ${studentNIM}.pdf`;
      case "TRANSCRIPT":
        return `[Transkip Nilai] ${studentName} - ${studentNIM}.pdf`;
      case "ASSISTANCE_SHEET":
        return `[Lembar Asistensi] ${studentName} - ${studentNIM}.pdf`;
      case "FINAL_THESIS":
        return `[Dokumen Tugas Akhir] ${studentName} - ${studentNIM}.pdf`;
      default:
        throw new Error(`Tipe dokumen ${documentType} tidak dikenali`);
    }
  }

  static validateScores(
    writingScore: number,
    presentationScore: number,
    masteryScore: number,
    characteristicScore: number | null,
    lecturerRole: "ADVISOR" | "ASSESSOR"
  ): number {
    const requiredScores = [writingScore, presentationScore, masteryScore];
    for (const score of requiredScores) {
      if (score < 0 || score > 100) {
        throw new Error("Setiap nilai harus antara 0 sampai 100");
      }
    }

    let finalScore: number;
    if (lecturerRole === "ADVISOR") {
      if (characteristicScore === null || characteristicScore === undefined) {
        throw new Error("Guidance score wajib diisi oleh pembimbing");
      }
      if (characteristicScore < 0 || characteristicScore > 100) {
        throw new Error("Guidance score harus antara 0 sampai 100");
      }
      finalScore = (presentationScore + masteryScore + characteristicScore) / 3;
    } else {
      finalScore = (writingScore + presentationScore + masteryScore) / 3;
    }
    return finalScore;
  }

  async getAllSeminars(
    filters: { studentNIM?: string; type?: "PROPOSAL" | "HASIL" } = {}
  ): Promise<Seminar[]> {
    const { studentNIM, type } = filters;

    const seminars = await prisma.seminar.findMany({
      where: {
        studentNIM: studentNIM ? studentNIM : undefined,
        type: type ? type : undefined,
      },
      select: {
        id: true,
        type: true,
        title: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        studentNIM: true,
        student: {
          select: {
            name: true,
            nim: true,
            profilePicture: true,
          },
        },
        folderId: true,
        time: true,
        room: true,
        advisors: {
          select: {
            lecturer: { select: { name: true, nip: true } },
          },
        },
        assessors: {
          select: {
            lecturer: { select: { name: true, nip: true } },
          },
        },
        assessments: {
          select: {
            lecturerNIP: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return seminars as Seminar[];
  }

  async getSeminarDetail(seminarID: number) {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarID },
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

    if (!seminar) {
      throw new Error("Seminar tidak ditemukan");
    }

    return seminar;
  }
}
