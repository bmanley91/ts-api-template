import { Hello } from '../../../domain/entities/hello';

export interface HelloDataSource {
    create(hello: Hello): Promise<boolean>;
    getAll(): Promise<Hello[]>;
}
