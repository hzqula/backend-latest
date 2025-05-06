import express from "express";
import { authenticateJWT , restrictTo} from "../middlewares/auth";
import * as securityLogController from "../controllers/security-log.controller";
const router = express.Router();

router.get("/",  securityLogController.getSecurityLogs );
router.delete("/cleanup", securityLogController.cleanupOldLogs , authenticateJWT);

export default router;
