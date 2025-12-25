import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { authMiddleware } from "../middlewares/authMiddleware";

const productRoutes = Router();
const controller = new ProductController();

productRoutes.post("/", authMiddleware, (req, res) =>
  controller.create(req, res)
);

productRoutes.get("/", authMiddleware, (req, res) => controller.list(req, res));

export { productRoutes };
