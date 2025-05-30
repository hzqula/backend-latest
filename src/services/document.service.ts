// backend/src/services/document.service.ts
import { google } from "googleapis";
import path from "path";
import { Readable } from "stream";
import {
  FILE_ID_EVENT_REPORT,
  FILE_ID_SEMINAR_INVITATION,
  GOOGLE_DRIVE_SERVICE_ACCOUNT_PATH,
} from "../configs/env";

interface SeminarData {
  student_name: string;
  nim: string;
  judul_penelitian: string;
  date: string;
  time: string;
  ketua_seminar?: string;
  pembimbing_1?: string;
  pembimbing_2?: string;
  penguji_1?: string;
  penguji_2?: string;
  hari?: string;
  nip_ketua_seminar?: string;
}

export class DocumentService {
  private auth;
  private drive;
  private docs;

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, `${GOOGLE_DRIVE_SERVICE_ACCOUNT_PATH}`),
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/documents",
      ],
    });

    this.drive = google.drive({ version: "v3", auth: this.auth });
    this.docs = google.docs({ version: "v1", auth: this.auth });
  }

  async generateInvitationSeminar(seminarData: SeminarData): Promise<{
    stream: Readable;
    fileName: string;
  }> {
    // Validasi data
    if (
      !seminarData.student_name ||
      !seminarData.nim ||
      !seminarData.judul_penelitian ||
      !seminarData.date ||
      !seminarData.time
    ) {
      throw new Error("Missing required fields");
    }

    // ID file template Google Docs untuk undangan seminar
    const templateDocId = FILE_ID_SEMINAR_INVITATION;

    // Langkah 1: Salin dokumen template ke dokumen sementara
    const copyResponse = await this.drive.files.copy({
      fileId: templateDocId,
      requestBody: {
        name: `[Undangan Seminar] ${seminarData.student_name.replace(
          /\s+/g,
          "_"
        )}`,
      },
    });

    const newDocId = copyResponse.data.id;
    if (!newDocId) {
      throw new Error("Failed to copy the template document");
    }

    try {
      // Langkah 2: Ganti placeholder dalam dokumen sementara
      const replacements = [
        { placeholder: "<<SEMINAR>>", replacement: "Seminar Proposal" },
        {
          placeholder: "<<KETUA SEMINAR>>",
          replacement: seminarData.pembimbing_1 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PEMBIMBING 1>>",
          replacement: seminarData.pembimbing_1 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PEMBIMBING 2>>",
          replacement: seminarData.pembimbing_2 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PENGUJI 1>>",
          replacement: seminarData.penguji_1 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PENGUJI 2>>",
          replacement: seminarData.penguji_2 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA MAHASISWA>>",
          replacement: seminarData.student_name || "Tidak diketahui",
        },
        {
          placeholder: "<<NIM>>",
          replacement: seminarData.nim || "Tidak diketahui",
        },
        {
          placeholder: "<<JUDUL PENELITIAN>>",
          replacement: seminarData.judul_penelitian || "Tidak diketahui",
        },
        {
          placeholder: "<<HARI>>",
          replacement: seminarData.hari || "Tidak diketahui",
        },
        {
          placeholder: "<<TANGGAL SEMINAR>>",
          replacement: seminarData.date || "Tidak diketahui",
        },
        {
          placeholder: "<<WAKTU SEMINAR>>",
          replacement: seminarData.time || "Tidak diketahui",
        },
        {
          placeholder: "<<RUANG SEMINAR>>",
          replacement: "Tidak ditentukan", // Placeholder ini ada di undangan, tapi kita biarkan default
        },
      ];

      const requests = replacements.map(({ placeholder, replacement }) => ({
        replaceAllText: {
          containsText: {
            text: placeholder,
            matchCase: true,
          },
          replaceText: replacement,
        },
      }));

      // Terapkan penggantian ke dokumen sementara
      await this.docs.documents.batchUpdate({
        documentId: newDocId,
        requestBody: { requests },
      });

      // Langkah 3: Ekspor dokumen sementara ke PDF
      const exportResponse = await this.drive.files.export(
        {
          fileId: newDocId,
          mimeType: "application/pdf",
        },
        { responseType: "stream" }
      );

      const fileName = `[Undangan Seminar] ${seminarData.student_name.replace(
        /\s+/g,
        "_"
      )}.pdf`;

      return {
        stream: exportResponse.data as Readable,
        fileName,
      };
    } finally {
      // Langkah 4: Hapus dokumen sementara di Google Drive
      await this.drive.files.delete({ fileId: newDocId });
      console.log(`Temporary document deleted: ${newDocId}`);
    }
  }

  async generateEventReport(seminarData: SeminarData): Promise<{
    stream: Readable;
    fileName: string;
  }> {
    // Validasi data
    if (
      !seminarData.student_name ||
      !seminarData.nim ||
      !seminarData.judul_penelitian ||
      !seminarData.date ||
      !seminarData.time
    ) {
      throw new Error("Missing required fields");
    }

    // ID file template Google Docs untuk Berita Acara
    const templateDocId = FILE_ID_EVENT_REPORT;

    // Langkah 1: Salin dokumen template ke dokumen sementara
    const copyResponse = await this.drive.files.copy({
      fileId: templateDocId,
      requestBody: {
        name: `[Berita Acara] ${seminarData.student_name.replace(/\s+/g, "_")}`,
      },
    });

    const newDocId = copyResponse.data.id;
    if (!newDocId) {
      throw new Error("Failed to copy the template document");
    }

    try {
      // Langkah 2: Ganti placeholder dalam dokumen sementara
      const replacements = [
        {
          placeholder: "<<BERITA ACARA>>",
          replacement:
            "BERITA ACARA SEMINAR USUL PENELITIAN MAHASISWA PROGRAM STUDI TEKNIK LINGKUNGAN",
        },
        {
          placeholder: "<<NAMA MAHASISWA>>",
          replacement: seminarData.student_name || "Tidak diketahui",
        },
        {
          placeholder: "<<NIM>>",
          replacement: seminarData.nim || "Tidak diketahui",
        },
        {
          placeholder: "<<JUDUL PENELITIAN>>",
          replacement: seminarData.judul_penelitian || "Tidak diketahui",
        },
        {
          placeholder: "<<HARI>>",
          replacement: seminarData.hari || "Tidak diketahui",
        },
        {
          placeholder: "<<TANGGAL SEMINAR>>",
          replacement: seminarData.date || "Tidak diketahui",
        },
        {
          placeholder: "<<WAKTU SEMINAR>>",
          replacement: seminarData.time || "Tidak diketahui",
        },
        {
          placeholder: "<<SEMINAR>>",
          replacement: "Seminar Proposal",
        },
        {
          placeholder: "<<KETUA SEMINAR>>",
          replacement: seminarData.ketua_seminar || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PEMBIMBING 1>>",
          replacement: seminarData.pembimbing_1 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PEMBIMBING 2>>",
          replacement: seminarData.pembimbing_2 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PENGUJI 1>>",
          replacement: seminarData.penguji_1 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NAMA PENGUJI 2>>",
          replacement: seminarData.penguji_2 || "Tidak ditentukan",
        },
        {
          placeholder: "<<NIP KETUA SEMINAR PENELITIAN>>",
          replacement: seminarData.nip_ketua_seminar || "Tidak diketahui",
        },
      ];

      const requests = replacements.map(({ placeholder, replacement }) => ({
        replaceAllText: {
          containsText: {
            text: placeholder,
            matchCase: true,
          },
          replaceText: replacement,
        },
      }));

      // Terapkan penggantian ke dokumen sementara
      await this.docs.documents.batchUpdate({
        documentId: newDocId,
        requestBody: { requests },
      });

      // Langkah 3: Ekspor dokumen sementara ke PDF
      const exportResponse = await this.drive.files.export(
        {
          fileId: newDocId,
          mimeType: "application/pdf",
        },
        { responseType: "stream" }
      );

      const fileName = `[Berita Acara] ${seminarData.student_name.replace(
        /\s+/g,
        "_"
      )}.pdf`;

      return {
        stream: exportResponse.data as Readable,
        fileName,
      };
    } finally {
      // Langkah 4: Hapus dokumen sementara di Google Drive
      await this.drive.files.delete({ fileId: newDocId });
      console.log(`Temporary document deleted: ${newDocId}`);
    }
  }
}
