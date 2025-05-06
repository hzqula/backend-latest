import { Request } from 'express';
import { UAParser } from 'ua-parser-js';

export const getClientIp = (req: Request): string => {
  const forwarded = req.headers['x-forwarded-for'] || req.headers['CF-Connecting-IP'] || req.headers['X-Real-IP'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || '127.0.0.1';
};

export const getClientDevice = (req: Request): string => {
  const userAgent = req.headers['user-agent'] || 'Unknown';
  const parser = new UAParser(userAgent);
  const result = parser.getResult();
  
  const browser = result.browser.name ? `${result.browser.name} ${result.browser.version || ''}` : 'Unknown Browser';
  const os = result.os.name ? `${result.os.name} ${result.os.version || ''}` : 'Unknown OS';
  const deviceType = result.device.type || 'Desktop';

  return `${browser} on ${os} (${deviceType})`.trim();
};