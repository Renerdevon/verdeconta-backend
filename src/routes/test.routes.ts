import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const testRoutes = Router();

testRoutes.get("/private", authMiddleware, (req, res) => {
  return res.json({
    message: "Acesso autorizado 🎉",
    userId: req.userId,
  });
});

export { testRoutes };
