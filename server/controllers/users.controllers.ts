import { Request, Response } from "express";
import db from "../models";

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await db.User.create({
            avatar: req.body.avatar,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            bio: req.body.bio,
            email: req.body.email,
            password: req.body.password,
        });

        if (!user) {
            throw new Error("User cannot be found!");
        }

        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(404).json(error.message);
    }
};
