import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateProductDTO {
  name: string;
  price?: number;
  categoryId: string;
  userId: string;
}

export class ProductService {
  async create({ name, price, categoryId, userId }: CreateProductDTO) {
    return prisma.product.create({
      data: {
        name,
        price,
        categoryId,
        userId,
      },
    });
  }

  async listByUser(userId: string) {
    return prisma.product.findMany({
      where: { userId },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
