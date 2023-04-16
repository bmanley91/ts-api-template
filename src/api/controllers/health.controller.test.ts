import { HealthController } from './health.controller';
import httpmocks from 'node-mocks-http';

describe ('Health Controller', () => {

    it ('returns success', async () => {
        const mockRequest = httpmocks.createRequest();
        const mockResponse = httpmocks.createResponse();
        const mockHealthcheckUsecase = jest.fn(() => Promise.resolve(true));

        const controller = new HealthController(mockHealthcheckUsecase);
        await controller.healthcheck(mockRequest, mockResponse);

        expect(mockResponse.statusCode).toBe(200);
    });

    it ('returns an error', async () => {
        const mockRequest = httpmocks.createRequest();
        const mockResponse = httpmocks.createResponse();
        const mockHealthcheckUsecase = jest.fn(() => Promise.resolve(false));

        const controller = new HealthController(mockHealthcheckUsecase);
        await controller.healthcheck(mockRequest, mockResponse);

        expect(mockResponse.statusCode).toBe(500);
    });

});
