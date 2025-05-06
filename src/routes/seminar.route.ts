import express from "express";
import {
  registerProposalSeminar,
  uploadProposalSeminarDocument,
  scheduleProposalSeminar,
  getAllSeminars,
  getSeminarDetail,
  getSeminarByStudentNIM,
  updateSeminarProposalDocument,
  updateRegisterProposalSeminar,
  assessProposalSeminar,
} from "../controllers/seminar.controller";
import multer from "multer";
import { authenticateJWT, restrictTo } from "../middlewares/auth";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/proposal-register",
  authenticateJWT, // Tambahkan autentikasi
  restrictTo("STUDENT"),
  registerProposalSeminar
);
router.post(
  "/proposal-documents",
  authenticateJWT,
  restrictTo("STUDENT"),
  upload.single("file"),
  uploadProposalSeminarDocument
);

router.put(
  "/proposal-documents",
  authenticateJWT,
  upload.single("file"),
  updateSeminarProposalDocument
);
router.put(
  "/proposal-scheduled",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  scheduleProposalSeminar
);

router.put(
  "/:id",
  authenticateJWT,
  restrictTo("STUDENT"),
  updateRegisterProposalSeminar
);

router.get("/", authenticateJWT, getAllSeminars);
router.get("/:id", getSeminarDetail); 
router.get("/student/:nim", authenticateJWT, getSeminarByStudentNIM);

router.post(
  "/:id/assess",
  authenticateJWT,
  restrictTo("LECTURER"),
  assessProposalSeminar
);

export default router;
