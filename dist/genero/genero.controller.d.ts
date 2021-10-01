import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from '.prisma/client';
export declare class GeneroController {
    private generoService;
    constructor(generoService: GeneroService);
    index(): Promise<Genero[]>;
    getById(id: string): Promise<Genero>;
    create(createGenero: CreateGeneroDto): Promise<Genero>;
    update(id: string, genero: CreateGeneroDto): Promise<Genero>;
    deleteGenero(id: string): Promise<Genero>;
    deleteAll(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
