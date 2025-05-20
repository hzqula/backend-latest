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
import { logAllRequests } from "./middlewares/securityLogMiddleware";
import { cleanupOldLogs } from "./services/security-log.service";
import SecurityLogRoute from "./routes/security-log.route";
import { authenticateJWT, restrictTo } from "./middlewares/auth";
import invitationRouter from "./routes/invitation.route";
import announcementRouter from "./routes/announcement.route";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://www.google.com",
          "https://www.gstatic.com",
        ],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'", "http://localhost:5500"],
        frameSrc: ["'self'", "https://www.google.com"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },

    frameguard: {
      action: "deny",
    },

    noSniff: true,

    referrerPolicy: {
      policy: "strict-origin-when-cross-origin",
    },

    dnsPrefetchControl: {
      allow: false,
    },
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
app.use("/api/students", studentRouter);
app.use("/api/lecturers", lecturerRouter);
app.use("/api/recaptcha", recaptchaRouter);
app.use("/api/reset-password", resetPassword);
app.use("/api/seminars", seminarRouter);
app.use("/api/seminars", seminarProposalRouter);
app.use("/api/seminars", seminarResultRouter);
app.use("/api/announcements", announcementRouter);
app.use(
  "/api/security-logs",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  SecurityLogRoute
);
app.use("/api", invitationRouter);

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
