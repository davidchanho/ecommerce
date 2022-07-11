import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

// TODO: Rename
// FIXME: sending some errors twice.
function validateResponse(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.json({ errors: result.array() });
    }

    next();
}

export default validateResponse;
