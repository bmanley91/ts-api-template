import { v4 as uuid } from 'uuid';
import { getHelloUsecase } from './get-hello.use-case';


describe ('Get Hello Use Case', () => {
    const mockCreate = jest.fn();
    const mockFind = jest.fn();

    const mockHelloRepo = {
        create: mockCreate,
        findById: mockFind
    };

    it ('uses the given id to query the database', async () => {
        const inputId = uuid();

        await getHelloUsecase(inputId, mockHelloRepo);

        expect(mockFind).toBeCalledWith(inputId);
    });
});