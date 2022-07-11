import CategoryServices from "../services/category.services";
import { Request, Response } from "express";

const categories = new CategoryServices();

export async function getAll(req: Request, res: Response) {
    try {
        const response = await categories.getAll();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function getBySlug(req: Request, res: Response) {
    try {
        const { slug } = req.params;
        const response = await categories.getBySlug(slug);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function createCategory(req: Request, res: Response) {
    try {
        const response = await categories.create({
            name: req.body.name,
            banner_image: req.body.banner_image,
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function deleteCategoryByName(req: Request, res: Response) {
    try {
        const response = await categories.removeByName(req.params.name);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function updateCategoryByName(req: Request, res: Response) {
    try {
        const response = await categories.updateByName(
            req.params.name,
            req.body
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}
