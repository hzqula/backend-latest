import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger";
const prisma = new PrismaClient();

export const getSecurityLogs = async (page: number, perPage: number, showAll: boolean = false) => {
  const skip = (page - 1) * perPage;
  try {
    console.log("Fetching security logs..."); // Debugging log
    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const where = showAll ? {} : { createdAt: { gte: oneMonthAgo } };
    const [logs, total] = await Promise.all([
      prisma.securityLog.findMany({
        skip,
        take: perPage,
        where,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { email: true, role: true } } },
      }),
      prisma.securityLog.count({ where }),
    ]);
    console.log("Logs fetched:", logs); // Debugging log
    return {
      logs,
      pagination: {
        total,
        page,
        perPage,
        totalPages: Math.ceil(total / perPage),
      },
    };
  } catch (error) {
    logger.error("Error fetching security logs:", error);
    throw new Error("Failed to fetch security logs");
  }
};

export const cleanupOldLogs = async (olderThanDays: number = 90) => {
  try {
    const date = new Date();
    date.setDate(date.getDate() - olderThanDays);
    const deletedCount = await prisma.securityLog.deleteMany({
      where: { createdAt: { lt: date } },
    });
    logger.info(`Deleted ${deletedCount.count} logs older than ${olderThanDays} days`);
    return deletedCount.count; // Fix: Langsung return deletedCount (tanpa .count)
  } catch (error) {
    logger.error("Error cleaning up old logs:", error);
    throw new Error("Failed to clean up old logs");
  }
};