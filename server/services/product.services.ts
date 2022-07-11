import { ReturnModelType } from "@typegoose/typegoose";
import { BeAnObject } from "@typegoose/typegoose/lib/types";
import models from "../models";
import { Product } from "../models/Product";

class ProductServices {
    private products: ReturnModelType<typeof models.Product, BeAnObject>;

    constructor() {
        this.products = models.Product;
    }

    async getAll() {
        try {
            return await this.products.find({});
        } catch (error) {
            throw new Error("Products could not be found!");
        }
    }

    async getBySlug(slug: string) {
        try {
            return await this.products.findOne({ slug });
        } catch (error) {
            throw new Error("Product could not be found!");
        }
    }

    async create(product: Product) {
        try {
            return await this.products.create(product);
        } catch (error) {
            throw new Error("Product could not be created!");
        }
    }

    async removeByName(name: string) {
        try {
            return await this.products.findOneAndRemove({ name });
        } catch (error) {
            throw new Error("Product could not be removed!");
        }
    }

    async updateByName(name: string, product: Product) {
        try {
            return await this.products.findOneAndUpdate({ name }, product);
        } catch (error) {
            throw new Error("Product could not be removed!");
        }
    }
}

export default ProductServices;
