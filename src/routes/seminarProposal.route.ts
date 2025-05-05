import express from "express";
import {
  registerProposalSeminar,
  uploadProposalSeminarDocument,
  scheduleProposalSeminar,
  updateRegisterProposalSeminar,
  updateSeminarProposalDocument,
  getProposalSeminarByStudentNIM,
  assessProposalSeminar,
  updateAssessment,
} from "../controllers/seminarProposal.controller";
import multer from "multer";
import { authenticateJWT, restrictTo } from "../middlewares/auth";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/proposal-register",
  authenticateJWT,
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
  restrictTo("STUDENT"),
  upload.single("file"),
  updateSeminarProposalDocument
);
router.put(
  "/proposal-schedule",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  scheduleProposalSeminar
);
router.put(
  "/proposal-register/:id",
  authenticateJWT,
  restrictTo("STUDENT"),
  updateRegisterProposalSeminar
);
router.get("/proposal/:nim", authenticateJWT, getProposalSeminarByStudentNIM);
router.post(
  "/proposal/:id/assess",
  authenticateJWT,
  restrictTo("LECTURER"),
  assessProposalSeminar
);
router.put(
  "/proposal/:id/assess",
  authenticateJWT,
  restrictTo("LECTURER"),
  updateAssessment
);

export default router;
