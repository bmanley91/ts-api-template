import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { logError, logInfo } from '../../infrastructure/util/logger';

export const validateCreateHello = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    logInfo(JSON.stringify(req.body));

    if (errors.isEmpty()) {
        logInfo('No errors');
        return next();
    }
    
    logError(`uh oh! ${JSON.stringify(errors)}`);

    const extractedErrors = errors.array().map((err) => {
        return {
            [err.param]: err.msg 
        };
    });

    return res.status(422).json({
        errors: extractedErrors
    });
};

export const createHelloValidationRules = () => {
    return [
        // Name must not be empty
        body('name').isLength({min: 1}),
    ];
};
