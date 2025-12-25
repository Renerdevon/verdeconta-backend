import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const authService = new AuthService();

    try {
      const result = await authService.login({ email, password });
      return res.json(result);
    } catch (error) {
      return res.status(401).json({
        message: "Email ou password inválidos",
      });
    }
  }
}
