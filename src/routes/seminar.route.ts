import express from "express";
import {
  getAllSeminars,
  getSeminarDetail,
} from "../controllers/seminar.controller";

const router = express.Router();

router.get("/", getAllSeminars);
router.get("/:id", getSeminarDetail);

export default router;
