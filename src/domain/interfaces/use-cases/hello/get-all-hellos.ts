import { Hello } from '../../../entities/hello';

export interface GetAllHellosUseCase { 
    execute(): Promise<Hello[]>; 
}
