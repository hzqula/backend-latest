// backend/src/controllers/document.controller.ts
import { Request, Response } from "express";
import { DocumentService } from "../services/document.service";

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

export class DocumentController {
  private documentService: DocumentService;

  constructor() {
    this.documentService = new DocumentService();
  }

  async generateInvitationSeminar(
    req: Request<{}, any, SeminarData>,
    res: Response
  ) {
    try {
      console.log("Data received from frontend:", req.body);

      const { stream, fileName } =
        await this.documentService.generateInvitationSeminar(req.body);

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${fileName}"`
      );
      res.setHeader("Content-Type", "application/pdf");

      stream
        .on("end", () => {
          console.log("File stream ended");
        })
        .on("error", (err) => {
          console.error("Error streaming file:", err);
          res.status(500).json({ error: "Failed to stream PDF" });
        })
        .pipe(res);
    } catch (error: any) {
      console.error("Error generating invitation:", error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }

  async generateEventReport(req: Request<{}, any, SeminarData>, res: Response) {
    try {
      console.log("Data received from frontend:", req.body);

      const { stream, fileName } =
        await this.documentService.generateEventReport(req.body);

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${fileName}"`
      );
      res.setHeader("Content-Type", "application/pdf");

      stream
        .on("end", () => {
          console.log("File stream ended");
        })
        .on("error", (err) => {
          console.error("Error streaming file:", err);
          res.status(500).json({ error: "Failed to stream PDF" });
        })
        .pipe(res);
    } catch (error: any) {
      console.error("Error generating event report:", error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }
}
