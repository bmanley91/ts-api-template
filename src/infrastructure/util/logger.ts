import { createLogger, format, transports } from 'winston';
import { getCorrelationId } from '../../api/middleware/logger.middleware';

export const logInfo = (message: string): void => {
    logWithContext('info', message);
};

export const logWarn = (message: string): void => {
    logWithContext('warn', message);
};

export const logError = (message: any): void => {
    logWithContext('error', message);
};


const { combine, timestamp, printf } = format;

const customFormat = printf(({ timestamp, level, message, correlationId }) => {
    return `${timestamp} [${correlationId}] ${level}: ${message}`;
});

const logger = createLogger({
    // TODO: JSON format
    format: combine(timestamp(), customFormat),
    transports: [new transports.Console()],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logWithContext = (level: 'info' | 'error' | 'warn', message: any) => {
    const correlationId = getCorrelationId() || 'N/A';
    logger.log({ level, message, correlationId });
};


