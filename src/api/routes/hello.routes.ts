import { Router } from 'express';
import helloController from '../controllers/hello.controller';
import { createHelloValidationRules, validateCreateHello } from '../validators/hello.validator';

const router = Router();

router.get('/:id', helloController.getHello);

router.post('/', createHelloValidationRules(), validateCreateHello, helloController.createHello);

export default router;
