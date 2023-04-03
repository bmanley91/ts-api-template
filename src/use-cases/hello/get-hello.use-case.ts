import { Hello } from '../../core/entities/hello.entity';
import { HelloRepository } from '../../domain/repositories/hello.repository';

export const getHelloUsecase = async (id: string): Promise<Hello> => {
    const hello = await new HelloRepository().findById(id);

    console.log(`Found Hello: ${hello}`);

    return hello;
}
