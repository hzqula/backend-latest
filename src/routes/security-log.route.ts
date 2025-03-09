import express from 'express';
import * as securityLogController from '../controllers/security-log.controller';

const router = express.Router();

router.get('/', securityLogController.getSecurityLogs);
router.delete('/cleanup', securityLogController.cleanupOldLogs);

export default router;