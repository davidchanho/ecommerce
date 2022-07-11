import express from 'express'
import { loginUser, registerUser, verifyUser } from '../controllers/auth.controllers'
import { verifyToken } from '../middlewares/auth.middlewares'

const router = express.Router()

router.route('/register').post(verifyToken, registerUser)

router.route('/login').post(loginUser)

router.route('/verify').post(verifyUser)

export default router