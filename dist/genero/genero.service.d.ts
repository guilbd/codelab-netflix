import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
export declare class GeneroService {
    private prisma;
    constructor(prisma: PrismaService);
    genero(data: Prisma.GeneroWhereUniqueInput): Promise<Genero | null>;
    getAll(): Promise<Genero[]>;
    getByIdGenero(id: number): Promise<Genero>;
    createGenero({ nome, filme }: {
        nome: any;
        filme: any;
    }): Promise<Genero>;
    updateGenero(id: number, data: CreateGeneroDto): Promise<Genero>;
    deleteGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
