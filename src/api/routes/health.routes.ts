import { Router } from 'express';
import healthController from '../controllers/health.controller';

const router = Router();

router.get('/', healthController.healthcheck);

export default router;
