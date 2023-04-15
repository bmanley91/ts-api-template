import { Client } from 'pg';
import { logError } from '../../infrastructure/util/logger';
import { getConnection } from '../../infrastructure/database/postgres-connection';

export const healthcheckUsecase = async (getConnectionFunction: () => Promise<Client> = getConnection): Promise<boolean> => {
    try {
        getConnectionFunction();
        return true;
    } catch (err) {
        logError(`Error connecting to database: ${err}`);
        return false;
    }
};
