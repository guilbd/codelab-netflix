import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    index(): Promise<Filme[]>;
    getById(id: string): Promise<Filme>;
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    update(id: string, filme: CreateFilmeDto): Promise<Filme>;
    deleteFilme(id: string): Promise<Filme>;
    deleteAll(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
