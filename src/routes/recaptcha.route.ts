import express from "express";
import { verifyRecaptcha } from "../controllers/recaptcha.controller";

const recaptchaRouter = express.Router();

recaptchaRouter.post("/verify", verifyRecaptcha);

export default recaptchaRouter;
