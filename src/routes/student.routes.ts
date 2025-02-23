import express from "express";
import {
  getAllStudents,
  getStudentByNIM,
} from "../controllers/student.controller";

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents as any);
studentRouter.get("/:nim", getStudentByNIM as any);

export default studentRouter;
