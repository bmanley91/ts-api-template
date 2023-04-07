import { Request, Response } from 'express';
import { HelloDTO } from '../../core/interfaces/hello.interface';
import { createHelloUsecase } from '../../use-cases/hello/create-hello.use-case';
import { getHelloUsecase } from '../../use-cases/hello/get-hello.use-case';
import { HelloRepository } from '../../domain/repositories/hello.repository';

export class HelloController {
  
    public async createHello(req: Request, res: Response): Promise<Response> {
        try {
            const hello: HelloDTO = req.body;
            console.log(`Received: ${JSON.stringify(hello)}`);

            // Call the use case to create the hello
            const newHello = await createHelloUsecase(hello, new HelloRepository());

            // Return the created user with a 201 status code
            return res.status(201).json(newHello);
        } catch (error) {
            console.error(error);
            // Handle errors and return an appropriate status code and message
            return res.status(500).json({ message: error });
        }
    }

    public async getHello(req: Request, res: Response): Promise<Response> {
        try {
            const hello = await getHelloUsecase(req.params.id, new HelloRepository());
            return res.status(201).json(hello);
        } catch (error: any) {
            console.error(error);
            // Handle errors and return an appropriate status code and message
            return res.status(500).json({ message: error.message });
        }
    }
}

const helloController = new HelloController();

export default helloController;
