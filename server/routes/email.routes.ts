import express from "express";
import emailControllers from "../controllers/email.controllers";
// import { body } from "express-validator";
// import validateResponse from "../middlewares/validationResults";

const router = express.Router();

// /**
//  * A category type
//  * @typedef {object} Category
//  * @property {string} name.required - The name
//  * @property {string} slug - The slug
//  * @property {string} banner_image.required - The banner_image
//  */

// /**
//  * POST /api/categories
//  * @summary Create and Returns a category
//  * @tags category
//  * @param {Category} request.body.required - category body
//  * @return {Category} 200 - success response - application/json
//  * @return {object} 400 - Bad request response
//  */
router.post(
    "",
    // body("name").exists().isString().isLength({ min: 3 }),
    // body("banner_image").isString().exists(),
    // validateResponse,
    emailControllers.send
);

export default router;
