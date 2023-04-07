import express, { Request, Response } from 'express';
import request from 'supertest';
import { createHelloValidationRules, validateCreateHello } from './hello.validator';

describe ('Hello Validator', () => {
    const app = express();
    app.use(express.json())
    app.post('/test', createHelloValidationRules(), validateCreateHello, (req: Request, res: Response) => res.status(201).send());

    it ('accepts a properly formed request', done => {
        request(app)
            .post('/test')
            .send({name: 'Bob'})
            .expect(201, done);
    });

    it ('rejects a request with no name', done => {
        request(app)
            .post('/test')
            .send({})
            .expect(422, done);
    });
});