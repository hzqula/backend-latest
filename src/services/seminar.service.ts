import { PrismaClient, Seminar, DocumentType } from "@prisma/client";
import { uploadFileToDrive } from "./googleDrive.service";
import { BASE_FOLDER_ID } from "../configs/env";

const prisma = new PrismaClient();

export class SeminarService {
  async registerProposalSeminar(
    title: string,
    advisorNIPs: string[],
    studentNIM: string
  ): Promise<Seminar> {
    const existingSeminar = await prisma.seminar.findFirst({
      where: { title, studentNIM, status: "DRAFT" },
    });
    if (existingSeminar) {
      throw new Error("Seminar dengan judul ini sudah terdaftar sebagai draft");
    }

    return prisma.seminar.create({
      data: {
        type: "PROPOSAL",
        title,
        status: "DRAFT",
        studentNIM,
        advisors: {
          create: advisorNIPs.map((nip) => ({ lecturerNIP: nip })),
        },
      },
      include: { advisors: true },
    });
  }

  async uploadSeminarDocument(
    seminarId: number,
    documentType: DocumentType,
    file: Buffer,
    fileName: string,
    mimeType: string
  ): Promise<any> {
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
    });
    if (!seminar) {
      throw new Error("Seminar tidak ditemukan");
    }

    const folder = BASE_FOLDER_ID;
    const fileURL = await uploadFileToDrive(file, fileName, mimeType, folder);

    return prisma.seminarDocument.create({
      data: {
        seminarID: seminarId,
        documentType,
        fileName,
        fileURL,
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
