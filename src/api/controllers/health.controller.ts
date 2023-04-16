import { Request, Response } from 'express';
import { healthcheckUsecase } from '../../use-cases/health/healthcheck.use-case';
import { logWarn } from '../../infrastructure/util/logger';

export class HealthController {
    constructor(usecase: () => Promise<boolean> = healthcheckUsecase) {
        this.healthcheckUsecase = usecase;
    }

    healthcheckUsecase: () => Promise<boolean>;

    public async healthcheck(req: Request, res: Response): Promise<Response> {
        const result = await this.healthcheckUsecase();
        
        if (!result) {
            logWarn('Service is not healthy');
            return res.status(500).json({ message: 'Service is not healthy' });
        } 

        return res.status(200).json({ message: 'OK' });
    }
}

export default new HealthController();
