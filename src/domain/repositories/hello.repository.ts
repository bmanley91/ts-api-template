import { Hello } from '../../core/entities/hello.entity';
import { getConnection } from '../../infrastructure/database/postgres-connection';

export class HelloRepository {
    public async create(hello: Hello): Promise<Hello> {
        try {
            console.log(`Creating Hello: ${JSON.stringify(hello)}`);
            const client = await getConnection();
            const queryResult = await client.query(
                'INSERT INTO hello (greeting) VALUES($1) RETURNING id, greeting, created_at;',
                [hello.greeting]
            );
            return queryResult.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    public async findById(id: string): Promise<Hello> {
        try {
            console.log(`Finding Hello by id: ${id}`);
            const client = await getConnection();
            const queryResult = await client.query(
                'SELECT id, greeting, created_at FROM hello WHERE id = $1',
                [id]
            );
            return queryResult.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}
