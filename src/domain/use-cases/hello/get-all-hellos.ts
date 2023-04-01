import { Hello } from '../../entities/hello'
import { HelloRepository } from '../../interfaces/repositories/hello-repository'
import { GetAllHellosUseCase } from '../../interfaces/use-cases/hello/get-all-hellos'

export class GetAllHellos implements GetAllHellosUseCase {
    helloRepository: HelloRepository
    constructor(helloRepository: HelloRepository) {
        this.helloRepository = helloRepository
    }

    async execute(): Promise<Hello[]> {
        const result = await this.helloRepository.getHellos()
        return result
    }
}
