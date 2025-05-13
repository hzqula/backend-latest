// backend/src/routes/invitation.route.ts
import express, { Request, Response } from "express";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const invitationRouter = express.Router();

interface SeminarData {
  student_name: string;
  nim: string;
  judul_penelitian: string;
  date: string;
  time: string;
  room: string;
  ketua_seminar?: string;
  pembimbing_1?: string;
  pembimbing_2?: string;
  penguji_1?: string;
  penguji_2?: string;
  output_path?: string;
}

invitationRouter.post(
  "/generate-invitation",
  async (req: Request<{}, any, SeminarData>, res: Response) => {
    try {
      const seminarData = req.body;

      // Validasi data
      if (
        !seminarData.student_name ||
        !seminarData.nim ||
        !seminarData.judul_penelitian ||
        !seminarData.date ||
        !seminarData.time ||
        !seminarData.room
      ) {
        res.status(400).json({ error: "Missing required fields" });
      }

      // Tentukan path untuk output file dengan path absolut
      const baseDir = path.resolve(__dirname, "../../");
      const outputDir = path.join(baseDir, "src", "outputs"); // Perbaiki path
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const outputFileName = `invitation_${seminarData.student_name.replace(
        /\s+/g,
        "_"
      )}.docx`;
      const docxOutputPath = path.join(outputDir, outputFileName);
      const pdfOutputPath = docxOutputPath.replace(".docx", ".pdf");

      // Hapus file jika sudah ada untuk mencegah Permission Denied
      if (fs.existsSync(docxOutputPath)) {
        fs.unlinkSync(docxOutputPath);
        console.log(`Existing DOCX file removed: ${docxOutputPath}`);
      }
      if (fs.existsSync(pdfOutputPath)) {
        fs.unlinkSync(pdfOutputPath);
        console.log(`Existing PDF file removed: ${pdfOutputPath}`);
      }

      // Tambahkan output_path ke seminarData (gunakan path .docx sementara)
      seminarData.output_path = docxOutputPath;

      // Jalankan skrip Python dengan path absolut
      const scriptPath = path.join(
        baseDir,
        "src/scripts/generate_invitation.py"
      );
      if (!fs.existsSync(scriptPath)) {
        throw new Error("Python script not found at: " + scriptPath);
      }

      console.log("Running Python script with data:", seminarData);

      const pythonProcess = spawn(
        "python",
        [scriptPath, JSON.stringify(seminarData)],
        {
          stdio: "pipe",
        }
      );

      let stdoutOutput = "";
      let errorOutput = "";

      pythonProcess.stdout.on("data", (data) => {
        stdoutOutput += data.toString();
        console.log("Python stdout:", data.toString());
      });

      pythonProcess.stderr.on("data", (data) => {
        errorOutput += data.toString();
        console.error("Python stderr:", data.toString());
      });

      pythonProcess.on("close", (code) => {
        if (code !== 0 || !fs.existsSync(pdfOutputPath)) {
          const errorMsg =
            code !== 0
              ? `Python script exited with code: ${code}, Error output: ${errorOutput}`
              : `Generated PDF file not found at: ${pdfOutputPath}`;
          console.error(errorMsg);
          res.status(500).json({
            error: "Failed to generate invitation",
            details: errorMsg,
          });
        }

        console.log("Python script output:", stdoutOutput);

        // Kirim file PDF ke client
        res.download(
          pdfOutputPath,
          `invitation_${seminarData.student_name.replace(/\s+/g, "_")}.pdf`,
          (err) => {
            if (err) {
              // Jangan kirim respons lagi jika res.download gagal, karena header sudah dikirim
              console.error("Error sending PDF:", err); // Cukup  untuk mencegah ERR_HTTP_HEADERS_SENT
            }

            // Hapus file PDF setelah diunduh
            fs.unlink(pdfOutputPath, (unlinkErr) => {
              if (unlinkErr)
                console.error("Error deleting PDF file:", unlinkErr);
            });
          }
        );
      });

      pythonProcess.on("error", (error) => {
        console.error("Python process error:", error);
        res.status(500).json({
          error: "Failed to execute Python script",
          details: error.message,
        });
      });
    } catch (error: any) {
      console.error("Error generating invitation:", error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }
);

export default invitationRouter;
