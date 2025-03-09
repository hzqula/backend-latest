import { Request, Response } from 'express';
import * as securityLogService from '../services/security-log.service';

export const getSecurityLogs = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const perPage = parseInt(req.query.perPage as string) || 20;
    const showAll = req.query.showAll === 'true';
    
    const result = await securityLogService.getSecurityLogs(page, perPage, showAll);
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Failed to get security logs:', error);
    return res.status(500).json({ message: 'Failed to get security logs' });
  }
};

export const cleanupOldLogs = async (req: Request, res: Response) => {
  try {
    const days = parseInt(req.query.days as string) || 90;
    const deletedCount = await securityLogService.cleanupOldLogs(days);
    
    return res.status(200).json({ 
      message: `Successfully deleted ${deletedCount} logs older than ${days} days`,
      deletedCount 
    });
  } catch (error) {
    console.error('Failed to cleanup old logs:', error);
    return res.status(500).json({ message: 'Failed to cleanup old logs' });
  }
};
