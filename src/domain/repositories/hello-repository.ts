import { HelloDataSource } from '../../data/interfaces/data-sources/hello-data-source';
import { Hello } from '../entities/hello';
import { HelloRepository } from '../interfaces/repositories/hello-repository';

export class HelloRepositoryImpl implements HelloRepository {
    helloDataSource: HelloDataSource
    constructor(helloDataSource: HelloDataSource) {
        this.helloDataSource = helloDataSource
    }

    async createHello(contact: Hello): Promise<boolean> {
        const result = await this.helloDataSource.create(contact)
        return result;
    }
    async getHellos(): Promise<Hello[]> {
        const result = await this.helloDataSource.getAll()
        return result;
    }
}
