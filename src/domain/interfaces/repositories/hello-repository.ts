import { Hello } from '../../entities/hello';

export interface HelloRepository { 
    createHello(contact: Hello): Promise<boolean>;
    getHellos(): Promise<Hello[]>; 
}
