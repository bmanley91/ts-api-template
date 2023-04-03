import { Hello } from '../../core/entities/hello.entity';
import { HelloDTO } from '../../core/interfaces/hello.interface';
import { HelloRepository } from '../../domain/repositories/hello.repository';

export const createHelloUsecase = async (helloDTO: HelloDTO): Promise<Hello> => {
    
    const greeting = `Hello, ${helloDTO.name}!`
    const newHello = await new HelloRepository().create({greeting});

    console.log(`Created Hello: ${JSON.stringify(newHello)}`);

    // Return the created user
    return newHello;
}
