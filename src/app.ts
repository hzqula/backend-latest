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
import seminarProposalRouter from "./routes/seminarProposal.route";
import seminarResultRouter from "./routes/seminarResult.route";
import securityLogRouter from "./routes/security-log.route";
import { logAllRequests } from "./middlewares/securityLogMiddleware";
import { cleanupOldLogs } from "./services/security-log.service";
import { authenticateJWT, restrictTo } from "./middlewares/auth";

const app = express();


// Konfigurasi Helmet untuk keamanan
app.use(
  helmet({
    // Content Security Policy (CSP)
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"], // Izinkan inline styles jika diperlukan
        scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google.com", "https://www.gstatic.com"], // Izinkan script untuk ReCAPTCHA
        imgSrc: ["'self'", "data:"], // Izinkan gambar dari self dan data URI
        connectSrc: ["'self'", "http://localhost:5500"], // Izinkan koneksi ke API Anda
        frameSrc: ["'self'", "https://www.google.com"], // Izinkan iframe untuk ReCAPTCHA
      },
    },
    // HSTS (Strict-Transport-Security) - Paksa HTTPS
    hsts: {
      maxAge: 31536000, // 1 tahun
      includeSubDomains: true,
      preload: true,
    },
    // X-Frame-Options: Mencegah clickjacking
    frameguard: {
      action: "deny",
    },
    // X-Content-Type-Options: Mencegah MIME type sniffing
    noSniff: true,
    // Referrer-Policy: Kontrol informasi referer
    referrerPolicy: {
      policy: "strict-origin-when-cross-origin",
    },
    // X-DNS-Prefetch-Control: Nonaktifkan prefetch DNS
    dnsPrefetchControl: {
      allow: false,
    },
    // X-Permitted-Cross-Domain-Policies: Batasi kebijakan cross-domain
    permittedCrossDomainPolicies: {
      permittedPolicies: "none",
    },
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
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
app.use("/api/students", authenticateJWT, studentRouter);  
app.use("/api/lecturers", authenticateJWT, lecturerRouter);
app.use("/api/recaptcha", recaptchaRouter);
app.use("/api/reset-password", resetPassword);
app.use("/api/seminars", seminarRouter);
app.use("/api/seminars", seminarProposalRouter);
app.use("/api/seminars", seminarResultRouter);
app.use("/api/security-logs", authenticateJWT, restrictTo("COORDINATOR"), securityLogRouter);

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
