import { Seminar, DocumentType, Student } from "@prisma/client";
import {
  createFolder,
  deleteFileFromDrive,
  uploadFileToDrive,
} from "./googleDrive.service";
import { BASE_FOLDER_ID } from "../configs/env";
import { prisma } from "../lib/prisma";

export class SeminarService {
  getFixFileName = (
    documentType: DocumentType,
    studentName: string,
    studentNIM: string
  ): string => {
    switch (documentType) {
      case "THESIS_PROPOSAL":
        return `[Proposal Tugas Akhir] ${studentName} - ${studentNIM}.pdf`;
      case "ADVISOR_AVAILABILITY":
        return `[Kesediaan Pembimbing] ${studentName} -  ${studentNIM}.pdf`;
      case "KRS":
        return `[Kartu Rencana Studi] ${studentName} - ${studentNIM}.pdf`;
      case "ADVISOR_ASSISTANCE":
        return `[Asistensi Pembimbing] ${studentName} - ${studentNIM}.pdf`;
      case "SEMINAR_ATTENDANCE":
        return `[Kehadiran Seminar] ${studentName} - ${studentNIM}.pdf`;
      default:
        throw new Error(`Tipe dokumen ${documentType} tidak dikenali`);
    }
  };

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

  async updateRegisterSeminarPropoal(
    seminarId: number,
    title: string,
    advisorNIPs: string[]
  ): Promise<Seminar> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
    });
    if (!seminar) throw new Error("Seminar tidak ditemukan");
    if (seminar.status !== "DRAFT")
      throw new Error("Hanya seminar yang masih DRAFT yang bisa di-edit");

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
    // fileName: string,
    mimeType: string
  ): Promise<any> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
      include: { documents: true, student: true },
    });
    if (!seminar) throw new Error("Seminar tidak ditemukan");
    if (seminar.status !== "DRAFT")
      throw new Error(
        "Dokumen hanya bisa diunggah pada seminar dengan status DRAFT"
      );

    const folderId = seminar.folderId;
    if (!folderId)
      throw new Error("Folder Google Drive untuk seminar ini belum dibuat");

    const fixFileName = this.getFixFileName(
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
    if (seminar.status !== "DRAFT")
      throw new Error(
        "Dokumen hanya bisa diubah pada seminar dengan status DRAFT"
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

    const fixFileName = this.getFixFileName(
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

    const requiredDocs: DocumentType[] = [
      "ADVISOR_AVAILABILITY",
      "KRS",
      "ADVISOR_ASSISTANCE",
      "SEMINAR_ATTENDANCE",
      "THESIS_PROPOSAL",
    ];

    const uploadedDocs = seminar.documents.map((doc) => doc.documentType);
    const allDocsUploaded = requiredDocs.every((doc) =>
      uploadedDocs.includes(doc)
    );

    if (allDocsUploaded) {
      console.log(
        `All documents uploaded after update, updating status to SUBMITTED`
      );
      await prisma.seminar.update({
        where: { id: seminarId },
        data: { status: "SUBMITTED" },
      });
    }

    return updatedDocument;
  }

  async getAllSeminars(): Promise<Seminar[]> {
    const seminars = prisma.seminar.findMany({
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
      },
      orderBy: { createdAt: "desc" },
    });

    return seminars;
  }

  async getSeminarDetail(seminarID: number): Promise<Seminar | null> {
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
      },
    });
    if (!seminar) {
      throw new Error("Seminar tidak ditemukan");
    }

    return seminar;
  }

  async getSeminarByStudentNIM(studentNIM: string): Promise<any> {
    return prisma.seminar.findFirst({
      where: { studentNIM, type: "PROPOSAL" },
      include: {
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
        documents: {
          select: { documentType: true, fileName: true, fileURL: true },
        },
      },
    });
  }

  async finalizeSeminar(
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
}
