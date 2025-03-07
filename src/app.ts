import express, { Request, Response } from "express";
import cors from "cors";
import { PORT } from "./configs/env";
import authRoutes from "./routes/auth.routes";
import studentRoutes from "./routes/student.routes";
import recaptchaRoutes from "./routes/recaptcha.routes";


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Latest API");
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/recaptcha", recaptchaRoutes);

app.listen(PORT, () => {
  console.log(`Latest API running on http://localhost:${PORT}`);
});

export default app;
