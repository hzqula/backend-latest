import express, { Request, Response } from "express";
import { PORT } from "./configs/env";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Latest API");
});

app.listen(PORT, () => {
  console.log(`Latest API running on http://localhost:${PORT}`);
});

export default app;
