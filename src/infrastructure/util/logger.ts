import { createLogger, format, transports } from 'winston';
import { getCorrelationId } from '../../api/middleware/logger.middleware';
import { v4 as uuid } from 'uuid';

export const logInfo = (message: string): void => {
    logWithContext('info', message);
};

export const logWarn = (message: string): void => {
    logWithContext('warn', message);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logError = (message: any): void => {
    logWithContext('error', message);
};


const { combine, timestamp, prettyPrint } = format;

const logger = createLogger({
    format: combine(timestamp(), prettyPrint()),
    transports: [new transports.Console()],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logWithContext = (level: 'info' | 'error' | 'warn', message: any) => {
    const correlationId = getCorrelationId() || uuid();
    logger.log({ level, message, correlationId });
};


