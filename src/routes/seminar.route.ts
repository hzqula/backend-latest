import express from "express";
import {
  registerProposalSeminar,
  uploadSeminarDocument,
  finalizeSeminar,
} from "../controllers/seminar.controller";
import multer from "multer";
import { authenticateJWT, restrictTo } from "../middlewares/auth";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/register",
  authenticateJWT,
  restrictTo("STUDENT"),
  registerProposalSeminar
);
router.post(
  "/document",
  authenticateJWT,
  restrictTo("STUDENT"),
  upload.single("file"),
  uploadSeminarDocument
);
router.put(
  "/finalize",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  finalizeSeminar
);

export default router;
