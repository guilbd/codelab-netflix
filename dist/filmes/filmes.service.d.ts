import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    filme(filmeWhereUniqueInput: Prisma.FilmeWhereUniqueInput): Promise<Filme | null>;
    filmes(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.FilmeWhereUniqueInput;
        where?: Prisma.FilmeWhereInput;
        orderBy?: Prisma.FilmeOrderByWithRelationInput;
    }): Promise<Filme[]>;
    getAll(): Promise<Filme[]>;
    getByIdFilme(id: number): Promise<Filme>;
    createFilme(data: Prisma.FilmeCreateInput): Promise<Filme>;
    updateFilme(id: number, data: Prisma.FilmeUpdateInput): Promise<Filme>;
    deleteFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
