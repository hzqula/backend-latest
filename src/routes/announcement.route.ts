import express from "express";
import asyncHandler from "express-async-handler";
import { authenticateJWT, restrictTo } from "../middlewares/auth";
import {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
} from "../controllers/announcement.controller";
import { upload } from "../controllers/auth.controller";

const announcementRouter = express.Router();

// Endpoint untuk membuat pengumuman (hanya Coordinator)
announcementRouter.post(
  "/",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  upload.single("image"),
  asyncHandler(createAnnouncement)
);

// Endpoint untuk mengambil pengumuman (opsional autentikasi untuk landing page)
announcementRouter.get(
  "/",
  (req, res, next) => {
    // Jika forPublic=true, lewati autentikasi
    if (req.query.forPublic === "true") {
      return next();
    }
    // Jika tidak, gunakan autentikasi
    return authenticateJWT(req, res, next);
  },
  asyncHandler(getAnnouncements)
);

// Endpoint untuk menghapus pengumuman (hanya Coordinator)
announcementRouter.delete(
  "/:id",
  authenticateJWT,
  restrictTo("COORDINATOR"),
  asyncHandler(deleteAnnouncement)
);

export default announcementRouter;
