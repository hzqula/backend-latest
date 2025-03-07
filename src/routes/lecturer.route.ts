import express from "express";
import {
  getAllLecturer,
  getLecturerByNIP,
} from "../controllers/lecturer.controller";

const lecturerRouter = express.Router();

lecturerRouter.get("/", getAllLecturer);
lecturerRouter.get("/:nip", getLecturerByNIP);

export default lecturerRouter;
