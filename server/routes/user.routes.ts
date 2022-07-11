import express from "express";
import { updateUser } from "../controllers/users.controllers";

const router = express.Router();

router.route("/:_id").patch(updateUser);

export default router;
