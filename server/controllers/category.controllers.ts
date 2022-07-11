import { Request, Response } from "express";
import models from "../models";

export async function getAll(req: Request, res: Response) {
    try {
        const response = await models.Category.find({});
        
        if(!response) {
            throw new Error("Categories could not be found!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function getBySlug(req: Request, res: Response) {
    try {
        const { slug } = req.params;
        const response = await models.Category.findOne({ slug });
        
        if(!response) {
            throw new Error("Category could not be found!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function createCategory(req: Request, res: Response) {
    try {
        const response = await models.Category.create({
            name: req.body.name,
            banner_image: req.body.banner_image,
        });
        
        if(!response) {
            throw new Error("Category could not be created!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function deleteCategoryByName(req: Request, res: Response) {
    try {
        const response = await models.Category.findOneAndRemove({
            name: req.params.name,
        });
        
        if(!response) {
            throw new Error("Category could not be removed!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export async function updateCategoryByName(req: Request, res: Response) {
    try {
        const response = await models.Category.findOneAndUpdate(
            { name: req.params.name },
            req.body
        );

        
        if(!response) {
            throw new Error("Category could not be removed!");
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}
