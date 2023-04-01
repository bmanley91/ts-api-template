import server from './server'
import { Client } from 'pg';
import { DatabaseWrapper } from './data/interfaces/data-sources/database-wrapper'
import HelloRouter from './presentation/routers/hello-router';
import { GetAllHellos } from './domain/use-cases/hello/get-all-hellos';
import { CreateHello } from './domain/use-cases/hello/create-hello';
import { HelloRepositoryImpl } from './domain/repositories/hello-repository';
import { PostgresHelloDataSource } from './data/data-sources/postgres/postgres-hello-data-source';


(async () => {
    // const postgresClient = new Client();
    // await postgresClient.connect();
    
    // const helloDatabase: DatabaseWrapper = {
    //     findAll: async () => {
    //         try {
    //             const results = await postgresClient.query<Hello>('SELECT * FROM hello;', []);
    //             return results.rows.map(row => {row.name});
    //         } catch (err) {
    //             console.error(err);
    //             throw err;
    //         }
    //     },
    //     insertOne: async (hello: Hello) => {
    //         try {
    //             const result = await postgresClient.query(
    //                 'INSERT INTO hello (name) VALUES ($1) RETURNING *;',
    //                 [hello.name]
    //             );
    //             return result.rows;
    //         } catch (err) {
    //             console.error(err);
    //             throw err;
    //         }
    //     }
    // }

    // const helloMiddleware = HelloRouter(
    //     new GetAllHellos(new HelloRepositoryImpl(new PostgresHelloDataSource(helloDatabase))),
    //     new CreateHello(new HelloRepositoryImpl(new PostgresHelloDataSource(helloDatabase))),
    // )

    // server.use("/hello", helloMiddleware);
    server.use("/health", (req, res) => 'healthy!');
    server.listen(4000, () => console.log("Running on server"));
})();
