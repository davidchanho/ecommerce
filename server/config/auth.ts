import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

interface IToken {
    userId: string;
}

export default {
    verifyToken(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET as string);
    },
    signToken(token: IToken) {
        return jwt.sign(token, process.env.JWT_SECRET as string);
    },
    async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    },
    async comparePassword(password: string, hashPassword: string) {
        return await bcrypt.compare(password, hashPassword);
    },
};
