import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Akses ditolak, token tidak ditemukan" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dyussbdh");
    req.body.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token tidak sesuai" });
  }
};
