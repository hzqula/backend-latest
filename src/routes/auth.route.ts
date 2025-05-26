import express from "express";
import asyncHandler from "express-async-handler";
import { authenticateJWT } from "../middlewares/auth";
import {
  sendOTP,
  verifyOTP,
  completeRegister,
  login,
  verifyRole,
} from "../controllers/auth.controller";
import { upload } from "../utils/multer";

const authRouter = express.Router();

authRouter.post("/send-otp", sendOTP);
authRouter.post("/verify-otp", verifyOTP);
authRouter.post(
  "/complete-register",
  upload.single("profilePicture"),
  completeRegister
);
authRouter.post("/login", login);
authRouter.get("/verify-role", asyncHandler(verifyRole as any));

export default authRouter;
