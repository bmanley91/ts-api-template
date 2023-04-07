import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express'

export const validateCreateHello = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }
    
    console.warn(JSON.stringify(errors));

    const extractedErrors: any[] = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors
    });
}

export const createHelloValidationRules = () => {
    return [
        // Name must not be empty
        body('name').isLength({min: 1}),
      ]
}