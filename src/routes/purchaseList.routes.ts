import { Router } from "express";
import { PurchaseListController } from "../controllers/PurchaseListController";
import { authMiddleware } from "../middlewares/authMiddleware";

const purchaseListRoutes = Router();
const controller = new PurchaseListController();

purchaseListRoutes.post("/", authMiddleware, (req, res) =>
  controller.create(req, res)
);

purchaseListRoutes.get("/", authMiddleware, (req, res) =>
  controller.list(req, res)
);

export { purchaseListRoutes };
