import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger';

const prisma = new PrismaClient();

// Helper function to get client IP
const getClientIp = (req: Request): string => {
  const forwarded = req.headers['x-forwarded-for'];
  
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0];
  }
  
  return req.socket.remoteAddress || '127.0.0.1';
};

// Helper function to get client device
const getClientDevice = (req: Request): string => {
  return req.headers['user-agent'] || 'Unknown';
};

// Helper function to check for common SQL injection patterns
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

// Middleware to log all requests
export const logAllRequests = async (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const originalUrl = req.originalUrl;
  const method = req.method;
  
  // Check for potential security threats
  let action = `${method} ${originalUrl}`;
  let isThreat = false;
  
  // Check query parameters for SQL injection attempts
  for (const key in req.query) {
    if (typeof req.query[key] === 'string' && containsSqlInjection(req.query[key] as string)) {
      action = `POTENTIAL SQL INJECTION: ${method} ${originalUrl}`;
      isThreat = true;
      break;
    }
  }
  
  // Check body for SQL injection attempts (for POST, PUT, etc.)
  if (!isThreat && req.body && typeof req.body === 'object') {
    const checkObject = (obj: any): boolean => {
      for (const key in obj) {
        if (typeof obj[key] === 'string' && containsSqlInjection(obj[key])) {
          return true;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
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
  
  // Log to database only if user is authenticated
  if (req.user && (req.user as any).id) {
    try {
      await prisma.securityLog.create({
        data: {
          userId: (req.user as any).id,
          action,
          ipAddress: ip,
          device: device,
          createdAt: new Date()
        }
      });
    } catch (error) {
      logger.error('Failed to log security event:', error);
    }
  } else if (isThreat) {
    // Log threats even without user info
    try {
      logger.warn(`Security threat detected: ${action} from IP: ${ip}, Device: ${device}`);
      // You might want to store unauthorized threats in the DB with a special userId
    } catch (error) {
      logger.error('Failed to log security threat:', error);
    }
  }
  
  // Continue with the request
  next();
  
  // Log response time after request completes
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(`${method} ${originalUrl} ${res.statusCode} - ${duration}ms - IP: ${ip}`);
  });
};

// Specific middleware for login attempts
export const logLoginAttempt = async (req: Request, res: Response, next: NextFunction) => {
  const ip = getClientIp(req);
  const device = getClientDevice(req);
  const action = req.body.success ? 'Login successful' : 'Login failed';
  
  if (req.body.userId) {
    try {
      await prisma.securityLog.create({
        data: {
          userId: req.body.userId,
          action,
          ipAddress: ip,
          device: device,
          createdAt: new Date()
        }
      });
    } catch (error) {
      logger.error('Failed to log login attempt:', error);
    }
  }
  
  next();
};