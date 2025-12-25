import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do VerdeConta...");

  // =========================
  // USER FIXO
  // =========================
  const email = "admin@verdeconta.pt";
  const password = "123456";

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
    },
  });

  console.log("✅ Utilizador criado");

  // =========================
  // CATEGORIAS
  // =========================
  const categories = [
    "Hortifruti",
    "Carnes",
    "Laticínios",
    "Limpeza",
    "Higiene",
    "Congelados",
    "Mercearia",
    "Outros",
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("✅ Categorias criadas");
}

main()
  .catch((error) => {
    console.error("❌ Erro no seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
