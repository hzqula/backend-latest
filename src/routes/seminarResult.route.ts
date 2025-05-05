import express from "express";
import {
  registerResultSeminar,
  uploadResultSeminarDocument,
  scheduleResultSeminar,
  updateRegisterResultSeminar,
  updateResultSeminarDocument,
  getResultSeminarByStudentNIM,
  assessResultSeminar,
  updateResultAssessment,
} from "../controllers/seminarResult.controller";
import multer from "multer";
import { authenticateJWT, restrictTo } from "../middlewares/auth";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/result-register",
  authenticateJWT,
  restrictTo("STUDENT"),
  registerResultSeminar
);
router.post(
  "/result-documents",
  authenticateJWT,
  restrictTo("STUDENT"),
  upload.single("file"),
  uploadResultSeminarDocument
);
router.put(
  "/result-documents",
  authenticateJWT,
  restrictTo("STUDENT"),
  upload.single("file"),
  updateResultSeminarDocument
);
router.put(
  "/result-schedule",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  scheduleResultSeminar
);
router.put(
  "/result-register/:id",
  authenticateJWT,
  restrictTo("STUDENT"),
  updateRegisterResultSeminar
);
router.get("/result/:nim", authenticateJWT, getResultSeminarByStudentNIM);
router.post(
  "/result/:id/assess",
  authenticateJWT,
  restrictTo("LECTURER"),
  assessResultSeminar
);
router.put(
  "/result/:id/assess",
  authenticateJWT,
  restrictTo("LECTURER"),
  updateResultAssessment
);

export default router;
