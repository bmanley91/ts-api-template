import { Hello } from '../../entities/hello'
import { HelloRepository } from '../../interfaces/repositories/hello-repository'
import { CreateHelloUseCase } from '../../interfaces/use-cases/hello/create-hello'

export class CreateHello implements CreateHelloUseCase {
    helloRepository: HelloRepository
    constructor(helloRepository: HelloRepository) {
        this.helloRepository = helloRepository
    }

    async execute(hello: Hello): Promise<boolean> {
        const result = await this.helloRepository.createHello(hello)
        return result
    }
}
