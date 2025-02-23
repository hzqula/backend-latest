import express from "express";
import { signUp, verifyOTP } from "../controllers/authController";

const router = express.Router();

router.post("/sign-up", signUp as any);
router.post("/verify-otp", verifyOTP as any);

export default router;
