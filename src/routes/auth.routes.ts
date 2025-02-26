import express from "express";
import {
  sendOTP,
  verifyOTP,
  completeSignUp,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/send-otp", sendOTP as any);
router.post("/verify-otp", verifyOTP as any);
router.post("/complete-sign-up", completeSignUp as any);

export default router;
