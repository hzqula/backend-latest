import express from "express";
import {
  registerProposalSeminar,
  uploadProposalSeminarDocument,
  finalizeSeminar,
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
  upload.single("file"),
  updateSeminarProposalDocument
);
router.put(
  "/proposal-finalize",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  finalizeSeminar
);

router.put(
  "/:id",
  authenticateJWT,
  restrictTo("STUDENT"),
  updateRegisterProposalSeminar
);

router.get("/", getAllSeminars);
router.get("/:id", getSeminarDetail);
router.get("/student/:nim", getSeminarByStudentNIM);

router.post(
  "/:seminarId/assess",
  authenticateJWT,
  restrictTo("LECTURER"),
  assessProposalSeminar
);

export default router;
