import { Request, Response } from 'express'
import auth from '../config/auth'
import models from '../models'

export const registerUser = async (req: Request, res: Response) => {
    try {
        const hashPassword = auth.hashPassword(req.body.password)

        const user = await models.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashPassword
        })

        if (!user) {
            throw new Error("User cannot be registered!")
        }

        const token = auth.signToken(user._id)

        user.token = token

        user.save()

        return res.status(200).json(user)
    } catch (error: any) {
        return res.status(404).json(error.message)
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = await models.User.findOne({ email: req.body.email })

        if (!user) {
            throw new Error("Email is not in use!")
        }

        user.updateLastLogin()

        const checkPassword = auth.comparePassword(req.body.password, user.password)

        if (!checkPassword) {
            throw new Error("Password does not match!")
        }

        const token = auth.signToken(user._id)

        user.token = token

        return res.status(200).json(user)
    } catch (error: any) {
        return res.status(404).json(error.message)
    }
}

export const verifyUser = async (req: Request, res: Response) => {
    try {
        const user = await models.User.findById(req.params._id)

        if (!user) {
            throw new Error("User cannot be found!")
        }

        user.verify()

        return res.status(200).json(user)
    } catch (error: any) {
        return res.status(404).json(error.message)
    }
}