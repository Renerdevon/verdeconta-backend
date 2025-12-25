import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não fornecido",
    });
  }

  const [, token] = authHeader.split(" ");

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({
      message: "JWT_SECRET não configurado",
    });
  }

  try {
    const decoded = jwt.verify(token, secret) as TokenPayload;

    // 💡 guardamos o userId na request
    req.userId = decoded.userId;

    return next();
  } catch {
    return res.status(401).json({
      message: "Token inválido ou expirado",
    });
  }
}
