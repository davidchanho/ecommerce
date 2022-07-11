import { ReturnModelType } from "@typegoose/typegoose";
import { BeAnObject } from "@typegoose/typegoose/lib/types";
import models from "../models";
import { Category } from "../models/Category";

class CategoryServices {
    private categories: ReturnModelType<typeof models.Category, BeAnObject>;

    constructor() {
        this.categories = models.Category;
    }

    async getAll() {
        try {
            return await this.categories.find({});
        } catch (error) {
            throw new Error("Categories could not be found!");
        }
    }

    async getBySlug(slug: string) {
        try {
            return await this.categories.findOne({ slug });
        } catch (error) {
            throw new Error("Category could not be found!");
        }
    }

    async create(category: Category) {
        try {
            return await this.categories.create(category);
        } catch (error) {
            throw new Error("Category could not be created!");
        }
    }

    async removeByName(name: string) {
        try {
            return await this.categories.findOneAndRemove({ name });
        } catch (error) {
            throw new Error("Category could not be removed!");
        }
    }

    async updateByName(name: string, category: Category) {
        try {
            return await this.categories.findOneAndUpdate({ name }, category);
        } catch (error) {
            throw new Error("Category could not be removed!");
        }
    }
}

export default CategoryServices;
