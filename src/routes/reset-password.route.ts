import express from "express";
import { resetPassword } from "../controllers/reset-password.controller";
import { authenticateJWT } from "../middlewares/auth";

const router = express.Router();

router.post("/", resetPassword as express.RequestHandler , authenticateJWT);

export default router;