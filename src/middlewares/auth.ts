import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../configs/env";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    role: string;
    nim?: string;
  };
}

const secretKey = JWT_SECRET || "kalo-ga-ada-di-env-nya";

export const authenticateJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Ga ada token cuy" });
    return;
  }

  try {
    const decoded = jwt.verify(token, secretKey) as {
      id: number;
      email: string;
      role: string;
      nim?: string;
      nip?: string;
    };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: "Token ga valid" });
    return;
  }
};

export const restrictTo = (...roles: string[]) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ error: "Ga bener nih role-nya" });
      return;
    }
    next();
  };
};
