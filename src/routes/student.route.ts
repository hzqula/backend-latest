import express from "express";
import {
  getAllStudents,
  getStudentByNIM,
} from "../controllers/student.controller";

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.get("/:nim", getStudentByNIM);

export default studentRouter;
