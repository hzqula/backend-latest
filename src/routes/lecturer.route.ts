import express from "express";
import {
  getAllLecturer,
  getLecturerByNIP,
} from "../controllers/lecturer.controller";
import { authenticateJWT, restrictTo } from "../middlewares/auth";

const lecturerRouter = express.Router();

lecturerRouter.get("/", authenticateJWT, getAllLecturer);
lecturerRouter.get("/:nip", authenticateJWT, getLecturerByNIP);

export default lecturerRouter;
