import { healthcheckUsecase } from './healthcheck.use-case';

describe('Healthcheck Use Case', () => {    
    it('returns a success message', async () => {
        const mockConnectionFunction = jest.fn();
    
        const result = await healthcheckUsecase(mockConnectionFunction);
    
        expect(result).toBe(true);
    });

    it('returns a failure message if it cannot connect to the database', async () => {
        const mockConnectionFunction = jest.fn(() => {
            throw Error('Could not connect to database');
        });
    
        const result = await healthcheckUsecase(mockConnectionFunction);
    
        expect(result).toBe(false);
    });
});
