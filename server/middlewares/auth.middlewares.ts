import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'
import auth from '../config/auth'

dotenv.config()

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        throw new Error("Token expired!")
    }

    try {
        const decoded = auth.verifyToken(token)
        // req.user = decoded
    } catch (err) {
        return res.status(400).send("Invalid Token")
    }
    return next()
}