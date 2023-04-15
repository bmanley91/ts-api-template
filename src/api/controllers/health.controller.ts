import { Request, Response } from 'express';
import { healthcheckUsecase } from '../../use-cases/hello/healthcheck.use-case';

export class HealthController {
    public async healthcheck(req: Request, res: Response): Promise<Response> {
        const result = await healthcheckUsecase();
        
        if (!result) {
            return res.status(500).json({ message: 'Service is not healthy' });
        } 

        return res.status(200).json({ message: 'OK' });
    }
}

export default new HealthController();
