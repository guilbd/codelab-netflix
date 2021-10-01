import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    filme(filmeWhereUniqueInput: Prisma.FilmeWhereUniqueInput): Promise<Filme | null>;
    getAll(): Promise<Filme[]>;
    getByIdFilme(id: number): Promise<Filme & {
        genero: {
            nome: string;
        }[];
        participantes: {
            nome: string;
            imagem: string;
            data_nascimento: string;
            ator_staff: string;
        }[];
    }>;
    createFilme(data: Prisma.FilmeCreateInput): Promise<Filme>;
    updateFilme(id: number, data: Prisma.FilmeUpdateInput): Promise<Filme>;
    deleteFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
