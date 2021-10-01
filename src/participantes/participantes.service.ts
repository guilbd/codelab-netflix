import { Injectable } from '@nestjs/common';
import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';

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

  async participantes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ParticipanteWhereUniqueInput;
    where?: Prisma.ParticipanteWhereInput;
    orderBy?: Prisma.ParticipanteOrderByWithRelationInput;
  }): Promise<Participante[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.participante.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  async getByIdParticipante(id: number) {
    return this.prisma.participante.findUnique({
      where: { id },
    });
  }

  async createParticipante(data: CreateParticipanteDto): Promise<Participante> {
    return this.prisma.participante.create({ data });
  }

  async updateParticipante(
    id: number,
    data: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      where: { id },
      data,
    });
  }

  async deleteParticipante(
    where: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante> {
    return this.prisma.participante.delete({
      where,
    });
  }

  async deleteAll() {
    return this.prisma.participante.deleteMany({});
  }
}
