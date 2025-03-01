import express from "express";
import {
  sendOTP,
  verifyOTP,
  completeRegister,
  login,
  upload,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post(
  "/complete-register",
  upload.single("profilePicture"),
  completeRegister
);
router.post("/login", login);

export default router;
