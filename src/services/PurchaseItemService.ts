import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AddItemDTO {
  purchaseListId: string;
  productId: string;
  quantity: number;
}

export class PurchaseItemService {
  // ➕ adiciona item à lista
  async addItem({ purchaseListId, productId, quantity }: AddItemDTO) {
    return prisma.purchaseItem.create({
      data: {
        purchaseListId,
        productId,
        quantity,
      },
    });
  }

  // ✅ NOVO MÉTODO — marcar como comprado e atualizar total
  async markAsBought(itemId: string, price: number) {
    const item = await prisma.purchaseItem.update({
      where: { id: itemId },
      data: {
        status: "BOUGHT",
        price,
      },
      include: {
        purchaseList: {
          include: {
            items: true,
          },
        },
      },
    });

    const total = item.purchaseList.items.reduce((acc, current) => {
      if (current.status === "BOUGHT" && current.price) {
        return acc + current.price * current.quantity;
      }
      return acc;
    }, 0);

    await prisma.purchaseList.update({
      where: { id: item.purchaseListId },
      data: { total },
    });

    // ✅ retorno correto para frontend
    return prisma.purchaseList.findUnique({
      where: { id: item.purchaseListId },
      include: {
        items: true,
      },
    });
  }
}
