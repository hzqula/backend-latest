import express from "express";
import { verifyRecaptcha } from "../controllers/recaptcha.controller";

const router = express.Router();

router.post("/verify", verifyRecaptcha);

export default router;
