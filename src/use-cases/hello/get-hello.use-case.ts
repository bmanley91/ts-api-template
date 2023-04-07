import { Hello } from '../../core/entities/hello.entity';
import { HelloRepository } from '../../domain/repositories/hello.repository';

export const getHelloUsecase = async (id: string, helloRepo: HelloRepository): Promise<Hello> => {
    const hello = await helloRepo.findById(id);

    console.log(`Found Hello: ${JSON.stringify(hello)}`);

    return hello;
};
