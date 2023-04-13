import { Hello } from '../../core/entities/hello.entity';
import { HelloDTO } from '../../core/interfaces/hello.interface';
import { HelloRepository } from '../../domain/repositories/hello.repository';
import { logInfo } from '../../infrastructure/util/logger';

export const createHelloUsecase = async (helloDTO: HelloDTO, helloRepo: HelloRepository): Promise<Hello> => {
    
    const greeting = `Hello, ${helloDTO.name}!`;
    const newHello = await helloRepo.create({greeting});

    logInfo(`Created Hello: ${JSON.stringify(newHello)}`);

    // Return the created user
    return newHello;
};
