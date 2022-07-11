import { DocumentType, getModelForClass, prop } from "@typegoose/typegoose";

class User {
    @prop({ required: true })
    public first_name!: string;

    @prop({ required: true })
    public last_name!: string;

    @prop({ required: true })
    public email!: string;

    @prop({ required: true })
    public password!: string;

    @prop()
    public bio!: string;

    @prop()
    public avatar!: string;

    @prop()
    public token!: string;

    @prop({ default: new Date() })
    public registeredAt!: Date;

    @prop({ default: false })
    public verified!: boolean;

    @prop()
    public verifiedAt!: Date;

    @prop()
    public last_login!: Date;

    public fullName(this: DocumentType<User>) {
        return this.first_name + " " + this.last_name;
    }

    public async verify(this: DocumentType<User>) {
        this.verified = true;
        await this.save();
    }

    public async updateLastLogin(this: DocumentType<User>) {
        this.last_login = new Date();
        await this.save();
    }

    public async verifyUser() {}
}

export default getModelForClass(User);
