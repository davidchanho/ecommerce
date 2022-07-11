import { Request, Response } from "express";
import CartServices from "../services/cart.services";

const cart = new CartServices();

export async function addToCart(req: Request, res: Response) {
    try {
        await cart.addToCart(req.params.session, {
            name: req.body.name,
            quantity: req.body.quantity,
        });
        return res.status(200).json(true);
    } catch (error: any) {
        return res.status(400).json(error.message);
    }
}

export async function getCart(req: Request, res: Response) {
    try {
        const result = await cart.getCart(req.params.session);

        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(400).json(error.message);
    }
}

export async function removeCart(req: Request, res: Response) {
    try {
        const result = await cart.removeCart(req.params.session);
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(400).json(error.message);
    }
}
