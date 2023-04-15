import { correlationMiddleware, getCorrelationId } from './logger.middleware';
import httpmocks from 'node-mocks-http';
import { v4 as uuid } from 'uuid';

describe ('Logger Middleware', () => {
    it ('adds a correlation id to the request', () => {
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
});
