import { PrismaClient, Market } from "@prisma/client";

const prisma = new PrismaClient();

export class PurchaseListService {
  async create(userId: string, market: Market) {
    return prisma.purchaseList.create({
      data: {
        userId,
        market,
      },
    });
  }

  async listByUser(userId: string) {
    return prisma.purchaseList.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
