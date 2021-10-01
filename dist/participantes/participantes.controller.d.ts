import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { Participante } from '.prisma/client';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipantesController {
    private participantesService;
    constructor(participantesService: ParticipantesService);
    index(): Promise<Participante[]>;
    getById(id: string): Promise<Participante>;
    create(createParticipante: CreateParticipanteDto): Promise<Participante>;
    update(id: string, participante: UpdateParticipanteDto): Promise<Participante>;
    deleteFilme(id: string): Promise<Participante>;
    deleteAll(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
