import { Injectable } from '@nestjs/common';
import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async participante(
    participanteWhereUniqueInput: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante | null> {
    return this.prisma.participante.findUnique({
      where: participanteWhereUniqueInput,
    });
  }

  //Function for get all participants
  async getAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  //Function for get a participant by id
  async getByIdParticipante(id: number) {
    return this.prisma.participante.findUnique({
      where: { id },
    });
  }

  //Function for create a participant
  async createParticipante(data: CreateParticipanteDto): Promise<Participante> {
    return this.prisma.participante.create({ data });
  }

  //Function for get all participants
  async updateParticipante(
    id: number,
    data: UpdateParticipanteDto,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      where: { id },
      data,
    });
  }

  //Function for delete a participant
  async deleteParticipante(
    where: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante> {
    return this.prisma.participante.delete({
      where,
    });
  }

  //Function for delete all participants in DB
  async deleteAll() {
    return this.prisma.participante.deleteMany({});
  }
}
