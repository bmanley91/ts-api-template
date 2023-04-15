import { getConnection } from '../../infrastructure/database/postgres-connection';
import { logError } from '../../infrastructure/util/logger';

export const healthcheckUsecase = async (): Promise<boolean> => {
    try {
        getConnection();
        return true;
    } catch (err) {
        logError(`Error connecting to database: ${err}`);
        return false;
    }
};
