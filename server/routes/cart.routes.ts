import express from "express";
import {
    addToCart,
    getCart,
    removeCart,
} from "../controllers/cart.controllers";

const router = express.Router();

router.route("/:session").get(getCart);

router.route("/:session").post(addToCart);

router.route("/:session").delete(removeCart);

export default router;
