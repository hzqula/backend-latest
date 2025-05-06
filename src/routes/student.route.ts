import express from "express";
import {
  getAllStudents,
  getStudentByNIM,
} from "../controllers/student.controller";
import { authenticateJWT , restrictTo} from "../middlewares/auth";

const studentRouter = express.Router();

studentRouter.get("/",authenticateJWT, getAllStudents); 
studentRouter.get("/:nim", authenticateJWT, getStudentByNIM);

export default studentRouter;
