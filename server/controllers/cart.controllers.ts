import { Request, Response } from "express";
import { client } from "../config/redis";
import { cartKey } from "../utils/helpers/keys";

export async function addToCart(req: Request, res: Response) {
    try {
        await client.hSet(cartKey(req.params.session), {
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
        const result = await client.hGetAll(cartKey(req.params.session));

        if (Object.keys(result).length === 0) {
            throw new Error("Cart not found");
        }

        return res.status(200).json({
            ...result,
            quantity: parseInt(result.quantity),
        });
    } catch (error: any) {
        return res.status(400).json(error.message);
    }
}

export async function removeCart(req: Request, res: Response) {
    try {
        const result = await client.del(cartKey(req.params.session));
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(400).json(error.message);
    }
}
