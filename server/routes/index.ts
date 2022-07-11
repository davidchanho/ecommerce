import express from "express";
import authRoutes from "./auth.routes";
import categoryRoutes from "./category.routes";
import emailRoutes from "./email.routes";
import productRoutes from "./product.routes";
import userRoutes from "./user.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/users", userRoutes);
router.use("/email", emailRoutes);

export default router;
