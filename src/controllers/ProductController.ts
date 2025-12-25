import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  async create(req: Request, res: Response) {
    const { name, price, categoryId } = req.body;
    const userId = req.userId;

    const service = new ProductService();

    const product = await service.create({
      name,
      price,
      categoryId,
      userId,
    });

    return res.status(201).json(product);
  }

  async list(req: Request, res: Response) {
    const userId = req.userId;

    const service = new ProductService();
    const products = await service.listByUser(userId);

    return res.json(products);
  }
}
