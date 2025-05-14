import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger';
import { getClientIp, getClientDevice } from '../utils/ipUtils';

const prisma = new PrismaClient();

const loginAttempts: Record<string, { count: number; firstAttempt: number }> = {};

const containsSqlInjection = (input: string): boolean => {
  const sqlPatterns = [
    /(\%27)|(\')|(\-\-)|(\%23)|(#)/i,
    /((\%3D)|(=))[^\n]*((\%27)|(\')|(\%3B)|(;))/i,
    /\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))/i,
    /((\%27)|(\'))union/i,
    /exec(\s|\+)+(s|x)p\w+/i,
    /insert|update|delete|drop|alter|truncate/i
  ];
  return sqlPatterns.some(pattern => pattern.test(input));
};

export const logAllRequests = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const originalUrl = req.originalUrl;
  const method = req.method;

  let action = `${method} ${originalUrl}`;
  let isThreat = false;

  for (const key in req.query) {
    if (typeof req.query[key] === 'string' && containsSqlInjection(req.query[key] as string)) {
      action = `POTENTIAL SQL INJECTION: ${method} ${originalUrl}`;
      isThreat = true;
      break;
    }
  }

  if (!isThreat && req.body && typeof req.body === 'object') {
    const checkObject = (obj: any): boolean => {
      for (const key in obj) {
        if (typeof obj[key] === 'string' && containsSqlInjection(obj[key])) return true;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          if (checkObject(obj[key])) return true;
        }
      }
      return false;
    };
    if (checkObject(req.body)) {
      action = `POTENTIAL SQL INJECTION: ${method} ${originalUrl}`;
      isThreat = true;
    }
  }

  if (isThreat) {
    try {
      logger.warn(`Security threat detected: ${action} from IP: ${ip}, Device: ${device}`);
      await prisma.securityLog.create({
        data: {
          userId: -1,
          action,
          ipAddress: ip,
          device,
          createdAt: new Date(),
        },
      });
    } catch (error) {
      logger.error('Failed to log security threat:', error);
    }
  }

  next();
};

export const logLoginAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Login successful" : `Login failed: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Login log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log login attempt:", error);
  }

  next();
};

export const logRegistrationAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Registration successful" : `Registration failed: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Registration log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log registration attempt:", error);
  }

  next();
};

export const logOTPAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "OTP valid" : `OTP invalid: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`OTP log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log OTP attempt:", error);
  }

  next();
};

export const detectBruteForce = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const now = Date.now();
  
  if (!loginAttempts[ip]) {
    loginAttempts[ip] = { count: 1, firstAttempt: now };
  } else {
    loginAttempts[ip].count += 1;
  }

  if (loginAttempts[ip].count > 5 && now - loginAttempts[ip].firstAttempt < 60 * 1000) {
    logger.warn(`Brute force attack detected from IP: ${ip}`);
    
    try {
      await prisma.securityLog.create({
        data: {
          userId: -1,
          action: 'Brute force login detected',
          ipAddress: ip,
          device: getClientDevice(req),
          createdAt: new Date(),
        },
      });
    } catch (error) {
      logger.error('Failed to log brute force attempt:', error);
    }
    
    loginAttempts[ip].count = 0;
    loginAttempts[ip].firstAttempt = now;
  }

  next();
};



export const logResetPasswordAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Reset password successful" : `Reset password failed: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Reset password log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log reset password attempt:", error);
  }

  next();
};



export const logRegistrationProposalAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Registrasion seminar Proposal successful" : `Registrasi seminar proposal failed: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Registrasi seminar proposal log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log registrasi seminar proposal attempt:", error);
  }

  next();
};


export const logRegistrationResultAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Registrasion seminar hasil successful" : `Registrasi seminar hasil failed: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Registrasi seminar hasil log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log registrasi seminar hasil attempt:", error);
  }

  next();
};


export const logScheduleProposalAttempt= async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "successfully schedule a proposal seminar" : `failed to schedule a proposal seminar: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Schedule seminar proposal log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log schedule seminar proposal attempt:", error);
  }

  next();
};


export const logScheduleResultAttempt= async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Schedule seminar hasil successful" : `Schedule seminar hasil failed: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Schedule seminar hasil log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log schedule seminar hasil attempt:", error);
  }

  next();
};



export const logAssessProposalAttemp = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "successfully assessed the proposal seminar" : `failed to assess the proposal seminar: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Assess seminar proposal log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log assess seminar proposal attempt:", error);
  }

  next();
};


export const logAssessResultAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Assess seminar hasil successful" : `Assess seminar hasil failed: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Assess seminar hasil log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log assess seminar proposal attempt:", error);
  }

  next();
};


export const logUpdateSemproAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "successfully update proposal seminar" : `failed to update proposal seminar: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Seminar proposal update log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log assess seminar proposal attempt:", error);
  }

  next();
};

export const logUpdateSemhasAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Successfully update result seminar" : `Failed update result seminar: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Assess seminar hasil log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log assess seminar hasil attempt:", error);
  }

  next();
};


export const logUploadDocSemhasAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Successfully upload the result seminar document" : `failed to upload result seminar document: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Seminar result document upload log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log Seminar result document uploadattempt:", error);
  }

  next();
};

export const logUploadDocSemproAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Successfully upload the proposal seminar document" : `failed to upload proposal seminar document: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Seminar proposal document upload log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log Seminar proposal document uploadattempt:", error);
  }

  next();
};


export const logUpdateDocSemproAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "successfully update the proposal seminar document" : `failed to update proposal seminar document: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Seminar proposal document upload log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log Seminar proposal document uploadattempt:", error);
  }

  next();
};


export const logUpdateDocSemhasAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "successfully update the proposal seminar document" : `failed to update proposal seminar document: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Seminar proposal document upload log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log Seminar proposal document uploadattempt:", error);
  }

  next();
};


export const logUpdateAssessSemproAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Successfully update proposal seminar assessment" : `Failed to update proposal seminar assessment: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Seminar proposal update assessment log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log Seminar proposal update assesment attempt:", error);
  }

  next();
};


export const logUpdateAssessSemhasAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const { email, success, reason } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    const userId = user ? user.id : null;
    const action = success ? "Successfully update result seminar assessment" : `Failed to update result seminar assessment: ${reason || "Unknown reason"}`;

    await prisma.securityLog.create({
      data: {
        userId,
        action,
        ipAddress: ip,
        device,
        createdAt: new Date(),
      },
    });

    logger.info(`Seminar proposal document upload log saved: ${action} - User ID: ${userId}`);
  } catch (error) {
    logger.error("Failed to log Seminar proposal update assesment attempt:", error);
  }

  next();
};




