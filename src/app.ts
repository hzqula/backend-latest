import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import cron from "node-cron";
import { PrismaClient } from "@prisma/client";
import { PORT } from "./configs/env";
import studentRouter from "./routes/student.route";
import lecturerRouter from "./routes/lecturer.route";
import authRouter from "./routes/auth.route";
import recaptchaRouter from "./routes/recaptcha.route";
import resetPassword from "./routes/reset-password.route";
import seminarRouter from "./routes/seminar.route";
import { logAllRequests } from "./middlewares/securityLogMiddleware";
import { cleanupOldLogs } from "./services/security-log.service";

const prisma = new PrismaClient();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Latest API");
});

app.use(logAllRequests);

app.use("/api/auth", authRouter);
app.use("/api/students", studentRouter);
app.use("/api/lecturers", lecturerRouter);
app.use("/api/recaptcha", recaptchaRouter);
app.use("/api/reset-password", resetPassword);
app.use("/api/seminars", seminarRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Terjadi kesalahan di server",
    error: err.message || "Kesalahan tidak diketahui",
  });
});

app.listen(PORT, () => {
  console.log(`Latest API running on http://localhost:${PORT}`);
});

cron.schedule("0 0 * * *", async () => {
  console.log("Running scheduled task: Cleaning up old logs");
  try {
    const deletedCount = await cleanupOldLogs(90);
    console.log(`Cleaned up ${deletedCount} old security logs`);
  } catch (error) {
    console.error("Failed to clean up old logs:", error);
  }
});
