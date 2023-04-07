import { createHelloUsecase } from './create-hello.use-case';

describe ('Create Hello Use Case', () => {
    const mockCreate = jest.fn();
    const mockFind = jest.fn();

    const mockHelloRepo = {
        create: mockCreate,
        findById: mockFind
    };

    it ('Builds a greeting using the given name', async () => {
        const name = 'Bill';
        const expectedGreeting = 'Hello, Bill!';

        await createHelloUsecase({name}, mockHelloRepo);

        expect(mockCreate).toBeCalledWith({greeting: expectedGreeting});
    });
});
