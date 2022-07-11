import { getModelForClass, prop, DocumentType } from "@typegoose/typegoose";

export class Category {
    @prop({ required: true, minlength: 3, unique: true })
    name!: string;

    @prop({ required: true })
    banner_image!: string;

    @prop({
        default: function (this: DocumentType<Category>) {
            this.slug = this.name.replace(" ", "").toLowerCase();
        },
    })
    slug?: string;
}

export default getModelForClass(Category);
