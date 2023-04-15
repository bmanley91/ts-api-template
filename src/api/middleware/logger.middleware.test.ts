import { correlationMiddleware, getCorrelationId } from './logger.middleware';
import httpmocks from 'node-mocks-http';
import { v4 as uuid } from 'uuid';

describe ('Logger Middleware', () => {
    it ('uses the X-Correlation-ID header as a correlation id', () => {
        const correlationId = uuid();
        const request = httpmocks.createRequest({
            headers: { 'X-Correlation-ID': correlationId }
        });
        const res = httpmocks.createResponse();
        let actualCorrelationId: string | undefined;
        const next = jest.fn(() => {
            actualCorrelationId = getCorrelationId();
        });

        correlationMiddleware(request, res, next);

        expect(next).toBeCalled();
        expect(actualCorrelationId).toBe(correlationId);
    });

    it ('generates a correlation id if none is provided', () => {
        const request = httpmocks.createRequest();
        const response = httpmocks.createResponse();
        let actualCorrelationId: string | undefined;
        const next = jest.fn(() => {
            actualCorrelationId = getCorrelationId();
        });

        correlationMiddleware(request, response, next);

        expect(next).toBeCalled();
        expect(actualCorrelationId).toBeDefined();
    });
});
