import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../configs/env";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
    nim?: string;
    nip?: string;
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
    console.log("No token provided"); // Debugging
    res.status(401).json({ error: "Ga ada token cuy" });
    return;
  }

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload & {
      id: number;
      email: string;
      role: string;
      nim?: string;
      nip?: string;
    };
    console.log("Decoded JWT:", decoded); // Debugging
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT verification error:", error); // Debugging
    if (error instanceof jwt.TokenExpiredError) {
      res
        .status(401)
        .json({ error: "Token sudah kedaluwarsa silakan login ulang" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      res.status(403).json({ error: "Token tidak valid" });
    } else {
      res.status(500).json({ error: "Error server internal" });
    }
    return;
  }
};

export const restrictTo = (...roles: string[]) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      console.log("No user in request"); // Debugging
      res.status(401).json({ error: "Ga ada user, login dulu" });
      return;
    }

    const userRole = req.user.role;
    console.log("User role:", userRole, "Allowed roles:", roles); // Debugging

    // Normalisasi role untuk menghindari masalah kapitalisasi
    const normalizedUserRole = userRole.toUpperCase();
    const normalizedRoles = roles.map((role) => role.toUpperCase());

    if (!normalizedRoles.includes(normalizedUserRole)) {
      const endpoint = req.path; // Mendapatkan endpoint yang diminta
      console.log(
        `Access denied to endpoint: ${endpoint} with role: ${userRole}. Allowed roles: ${roles.join(
          ", "
        )}`
      ); // Log endpoint dan role
      res.status(403).json({ error: "Ga bener nih role-nya" });
      return;
    }

    next();
  };
};
