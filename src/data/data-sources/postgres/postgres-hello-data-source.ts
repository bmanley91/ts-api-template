import { Hello } from '../../../domain/entities/hello'
import { DatabaseWrapper } from '../../interfaces/data-sources/database-wrapper'
import { HelloDataSource } from '../../interfaces/data-sources/hello-data-source'

export class PostgresHelloDataSource implements HelloDataSource {

    private database: DatabaseWrapper
    constructor(database: DatabaseWrapper) {
        this.database = database
    }
    async create(hello: Hello): Promise<boolean> {
        const result = await this.database.insertOne(hello)
        return result !== null
    }

    async getAll(): Promise<Hello[]> {
        return await this.database.findAll();
    }

}
