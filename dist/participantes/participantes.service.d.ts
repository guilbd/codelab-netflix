import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    participante(participanteWhereUniqueInput: Prisma.ParticipanteWhereUniqueInput): Promise<Participante | null>;
    getAll(): Promise<Participante[]>;
    getByIdParticipante(id: number): Promise<Participante>;
    createParticipante(data: CreateParticipanteDto): Promise<Participante>;
    updateParticipante(id: number, data: UpdateParticipanteDto): Promise<Participante>;
    deleteParticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
