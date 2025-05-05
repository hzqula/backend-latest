import express from "express";
import {
  getAllSeminars,
  getSeminarDetail,
} from "../controllers/seminar.controller";

const router = express.Router();

router.get("/seminars", getAllSeminars);
router.get("/seminars/:id", getSeminarDetail);

export default router;
