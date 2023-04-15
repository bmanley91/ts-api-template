import { Request, Response, NextFunction } from 'express';
import * as cls from 'cls-hooked';
import { v4 as uuid } from 'uuid';
import { logInfo } from '../../infrastructure/util/logger';

const correlationContext = cls.createNamespace('correlationContext');

export function correlationMiddleware(req: Request, res: Response, next: NextFunction) {
    logInfo('Yo yo yo');
    correlationContext.run(() => {
        const correlationId = req.header('X-Correlation-ID') || uuid();
        correlationContext.set('correlationId', correlationId);
        next();
    });
}

export function getCorrelationId(): string | undefined {
    console.log('in the thing?');
    return correlationContext.get('correlationId');
}
