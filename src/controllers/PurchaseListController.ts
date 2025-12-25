import { Request, Response } from "express";
import { PurchaseListService } from "../services/PurchaseListService";
import { Market } from "@prisma/client";

export class PurchaseListController {
  async create(req: Request, res: Response) {
    const { market } = req.body;
    const userId = req.userId;

    const service = new PurchaseListService();

    const list = await service.create(userId, market as Market);

    return res.status(201).json(list);
  }

  async list(req: Request, res: Response) {
    const userId = req.userId;

    const service = new PurchaseListService();
    const lists = await service.listByUser(userId);

    return res.json(lists);
  }
}
