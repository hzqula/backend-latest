import express, { Request, Response } from "express";
import cors from "cors";
import { PORT } from "./configs/env";
import authRoutes from "./routes/auth.route";
import studentRouter from "./routes/student.route";
import lecturerRouter from "./routes/lecturer.route";
import recaptchaRoutes from "./routes/recaptcha.route";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Latest API");
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRouter);
app.use("/api/lecturers", lecturerRouter);
app.use("/api/recaptcha", recaptchaRoutes);

app.listen(PORT, () => {
  console.log(`Latest API running on http://localhost:${PORT}`);
});

export default app;
