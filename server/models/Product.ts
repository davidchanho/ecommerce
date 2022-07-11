import { DocumentType, getModelForClass, prop } from "@typegoose/typegoose";

export class Product {
    @prop({ required: true, minlength: 3, unique: true })
    name!: string;

    @prop({ required: true })
    sku!: string;

    @prop({
        default: function (this: DocumentType<Product>) {
            this.slug = `${this.name}-${this.sku}`;
        },
    })
    slug?: string;

    @prop({ required: true, min: 0 })
    quantity!: number;

    @prop({ required: true, min: 0 })
    price!: number;

    @prop({ required: true })
    image!: string;

    @prop({ required: true })
    category_name!: string;
}

export default getModelForClass(Product);
