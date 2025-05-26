import express from "express";
import asyncHandler from "express-async-handler";
import { authenticateJWT } from "../middlewares/auth";
import { upload } from "../utils/multer";
import {
  updateProfilePicture,
  updateProfileData,
} from "../controllers/profile.controller";

const profileRouter = express.Router();

// Endpoint untuk update profile picture (sudah benar)
profileRouter.put(
  "/update-profile-picture",
  authenticateJWT,
  upload.single("profilePicture"),
  asyncHandler(updateProfilePicture)
);

// Endpoint untuk update profile data
profileRouter.put(
  "/update-profile",
  authenticateJWT,
  upload.none(), // Tambahkan ini untuk menangani FormData tanpa file
  asyncHandler(updateProfileData)
);

export default profileRouter;
