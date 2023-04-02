import config from 'config';
import { Client } from 'pg';

const dbConfig: any = config.get('db');

let dbClient: Client;

export const getConnection = async (): Promise<Client> => {
    if (!dbClient) {
        console.log('Connecting to database...');
        dbClient = new Client({
            host: dbConfig.host,
            port: dbConfig.port,
            database: dbConfig.database,
            user: dbConfig.user,
            password: dbConfig.password,
          });
        await dbClient.connect();
        console.log('Connected to database!');
    }

    return dbClient
};




