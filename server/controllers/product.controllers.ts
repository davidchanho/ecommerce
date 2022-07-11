import { Request, Response } from "express";
import models from "../models";

export async function getAll(req: Request, res: Response) {
    try {
        const response = await models.Product.find({});

        if (!response) {
            throw new Error("Products could not be found!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function getBySlug(req: Request, res: Response) {
    try {
        const { slug } = req.params;
        const response = await models.Product.findOne({ slug });

        if (!response) {
            throw new Error("Product could not be found!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function createProduct(req: Request, res: Response) {
    try {
        const response = await models.Product.create({
            name: req.body.name,
            sku: req.body.sku,
            quantity: req.body.quantity,
            price: req.body.price,
            image: req.body.image,
            category_name: req.body.category_name,
        });

        if (!response) {
            throw new Error("Product could not be created!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function deleteProductByName(req: Request, res: Response) {
    try {
        const response = await models.Product.findOneAndRemove({
            name: req.params.name,
        });

        if (!response) {
            throw new Error("Product could not be removed!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function updateProductByName(req: Request, res: Response) {
    try {
        const response = await models.Product.findOneAndUpdate(
            { name: req.params.name },
            req.body
        );

        if (!response) {
            throw new Error("Product could not be updated!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}
