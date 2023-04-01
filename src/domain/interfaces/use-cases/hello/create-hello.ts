import { Hello } from '../../../entities/hello';

export interface CreateHelloUseCase {
    execute(contact: Hello): Promise<boolean>;
}
