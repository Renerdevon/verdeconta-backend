import { Router } from "express";
import { PurchaseItemController } from "../controllers/PurchaseItemController";
import { authMiddleware } from "../middlewares/authMiddleware";

const purchaseItemRoutes = Router();
const controller = new PurchaseItemController();

purchaseItemRoutes.post("/", authMiddleware, (req, res) =>
  controller.add(req, res)
);

purchaseItemRoutes.patch("/:itemId/buy", authMiddleware, (req, res) =>
  controller.markAsBought(req, res)
);

export { purchaseItemRoutes };
