import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthService {
  async login({ email, password }: AuthRequest) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Credenciais inválidas");
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET não definido");
    }

    // ✅ USAR SEGUNDOS (número)
    const expiresIn = 60 * 60 * 24 * 7; // 7 dias

    const token = jwt.sign({ userId: user.id }, secret, { expiresIn });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}
