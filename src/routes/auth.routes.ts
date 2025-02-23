import express from "express";
import { signUp, verifyOTP } from "../controllers/auth.controller";

const router = express.Router();

router.post("/sign-up", signUp as any);
router.post("/verify-otp", verifyOTP as any);

export default router;
