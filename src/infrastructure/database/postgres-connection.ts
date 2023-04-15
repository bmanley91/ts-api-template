import config from 'config';
import { Client } from 'pg';
import { logInfo } from '../util/logger';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dbConfig: any = config.get('db');

let dbClient: Client;

/* istanbul ignore next */
export const getConnection = async (): Promise<Client> => {
    if (!dbClient) {
        logInfo('Connecting to database...');
        dbClient = new Client({
            host: dbConfig.host,
            port: dbConfig.port,
            database: dbConfig.database,
            user: dbConfig.user,
            password: dbConfig.password,
        });
        await dbClient.connect();
        logInfo('Connected to database!');
    }

    return dbClient;
};




