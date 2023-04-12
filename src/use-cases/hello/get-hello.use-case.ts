import { Hello } from '../../core/entities/hello.entity';
import { HelloRepository } from '../../domain/repositories/hello.repository';
import { logInfo } from '../../infrastructure/util/logger';


export const getHelloUsecase = async (id: string, helloRepo: HelloRepository): Promise<Hello> => {
    const hello = await helloRepo.findById(id);

    logInfo(`Found Hello: ${JSON.stringify(hello)}`);

    return hello;
};
