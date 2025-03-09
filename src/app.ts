import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import cron from "node-cron";
import { PrismaClient } from '@prisma/client';
import { PORT } from "./configs/env";
import studentRouter from "./routes/student.route";
import lecturerRouter from "./routes/lecturer.route";
import authRouter from "./routes/auth.route";
import recaptchaRouter from "./routes/recaptcha.route";
import resetPassword   from "./routes/reset-password.route";
import  SecurityLog  from "./routes/security-log.route";
import { logAllRequests } from "./middleware/securityLogMiddleware";
import { cleanupOldLogs } from './services/security-log.service';


const Prisma = new PrismaClient();
const app = express();

//middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

//apply security log middleware to all route
app.use(logAllRequests);


app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Latest API");
});


//routes
app.use("/api/auth", authRouter);
app.use("/api/students", studentRouter);
app.use("/api/lecturers", lecturerRouter);
app.use("/api/recaptcha", recaptchaRouter);
app.use("/api/reset-password", resetPassword);
app.use("/api/security-logs", SecurityLog);

app.listen(PORT, () => {
  console.log(`Latest API running on http://localhost:${PORT}`);
});

// Fix the cron schedule syntax (0 0 * * * = run at midnight every day)
cron.schedule('0 0 * * *', async () => {
  console.log('Running scheduled task: Cleaning up old logs');
  try {
    // By default keep logs for 90 days in the database (adjust as needed)
    const deletedCount = await cleanupOldLogs(90);
    console.log(`Cleaned up ${deletedCount} old security logs`);
  } catch (error) {
    console.error('Failed to clean up old logs:', error);
  }
});

export default app;
