import express from "express";
import { resetPassword } from "../controllers/reset-password.controller";

const router = express.Router();

router.post("/", resetPassword as express.RequestHandler);

export default router;
