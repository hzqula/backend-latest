import express from "express";
import {
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  getPublicAnnouncements,
  getAnnouncementsForRole,
} from "../controllers/announcement.controller";
import multer from "multer";
import { authenticateJWT, restrictTo } from "../middlewares/auth";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Hanya file JPEG atau PNG yang diizinkan"));
    }
    cb(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // Batas 5MB
});

router.post(
  "/",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  upload.single("image"),
  createAnnouncement
);

router.put(
  "/:id",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  upload.single("image"),
  updateAnnouncement
);

router.delete(
  "/:id",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  deleteAnnouncement
);

router.get(
  "/",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  getAllAnnouncements
);

router.get("/public", getPublicAnnouncements);

router.get(
  "/role",
  authenticateJWT,
  restrictTo("STUDENT", "LECTURER"),
  getAnnouncementsForRole
);

router.get(
  "/:id",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  getAnnouncementById
);

export default router;
