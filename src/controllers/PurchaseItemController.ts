import { Request, Response } from "express";
import { PurchaseItemService } from "../services/PurchaseItemService";

export class PurchaseItemController {
  async add(req: Request, res: Response) {
    const { purchaseListId, productId, quantity } = req.body;

    const service = new PurchaseItemService();

    const item = await service.addItem({
      purchaseListId,
      productId,
      quantity,
    });

    return res.status(201).json(item);
  }

  // ✅ ESTE MÉTODO É O QUE ESTAVA A FALTAR
  async markAsBought(req: Request, res: Response) {
    const { itemId } = req.params;
    const { price } = req.body;

    const service = new PurchaseItemService();

    const item = await service.markAsBought(itemId, price);

    return res.json(item);
  }
}
