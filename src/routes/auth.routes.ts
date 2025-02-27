import express from "express";
import {
  sendOTP,
  verifyOTP,
  completeSignUp,
  signIn,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/send-otp", sendOTP as any);
router.post("/verify-otp", verifyOTP as any);
router.post("/complete-sign-up", completeSignUp as any);
router.post("/sign-in", signIn as any);

export default router;
