import { getModelForClass, prop } from "@typegoose/typegoose";

export class Review {
    @prop({ required: true })
    user_id!: string;

    @prop({ required: true, min: 0, max: 5 })
    rating!: number;

    @prop({ required: true })
    text!: string;
}

export default getModelForClass(Review);
