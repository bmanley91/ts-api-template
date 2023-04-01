import express from 'express'
import { Request, Response } from 'express'
import { CreateHelloUseCase } from '../../domain/interfaces/use-cases/hello/create-hello'
import { GetAllHellosUseCase } from '../../domain/interfaces/use-cases/hello/get-all-hellos'


export default function HelloRouter (
    getAllHellosUseCase: GetAllHellosUseCase,
    createHelloUseCase: CreateHelloUseCase
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const hellos = await getAllHellosUseCase.execute()
            res.send(hellos)
        } catch (err) {
            res.status(500).send({ message: 'Error fetching greetings' })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createHelloUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving greeting" })
        }
    })

    return router
}
