import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    participante(participanteWhereUniqueInput: Prisma.ParticipanteWhereUniqueInput): Promise<Participante | null>;
    participantes(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ParticipanteWhereUniqueInput;
        where?: Prisma.ParticipanteWhereInput;
        orderBy?: Prisma.ParticipanteOrderByWithRelationInput;
    }): Promise<Participante[]>;
    getAll(): Promise<Participante[]>;
    getByIdParticipante(id: number): Promise<Participante>;
    createParticipante(data: CreateParticipanteDto): Promise<Participante>;
    updateParticipante(id: number, data: CreateParticipanteDto): Promise<Participante>;
    deleteParticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
