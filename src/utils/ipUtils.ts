import { Request } from 'express';

export const getClientIp = (req: Request): string => {
  const forwarded = req.headers['x-forwarded-for'];
  
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0];
  }
  
  return req.socket.remoteAddress || '127.0.0.1';
};

export const getClientDevice = (req: Request): string => {
  const userAgent = req.headers['user-agent'] || 'Unknown';
  return userAgent;
};