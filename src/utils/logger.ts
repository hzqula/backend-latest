import { createLogger, format, transports } from "winston";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/app.log" }),
  ],
});

// ✅ Fungsi untuk menyimpan Security Log ke database
export const logSecurityEvent = async (userId: number, action: string, ipAddress: string, device: string) => {
  try {
    await prisma.securityLog.create({
      data: { userId, action, ipAddress, device },
    });
    logger.info(`Security log stored: ${action} (userId: ${userId})`);
  } catch (error) {
    logger.error("Failed to store security log:", error);
  }
};

export default logger;
