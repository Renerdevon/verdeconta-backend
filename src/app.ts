import express from "express";
import cors from "cors";
import { authRoutes } from "./routes/auth.routes";
import { testRoutes } from "./routes/test.routes";
import { purchaseListRoutes } from "./routes/purchaseList.routes";
import { purchaseItemRoutes } from "./routes/purchaseItem.routes";
import { productRoutes } from "./routes/product.routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/test", testRoutes);
app.use("/lists", purchaseListRoutes);
app.use("/items", purchaseItemRoutes);
app.use("/products", productRoutes);

app.get("/health", (_req, res) => {
  return res.json({
    status: "ok",
    app: "VerdeConta 🇵🇹",
  });
});
