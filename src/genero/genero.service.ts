import { Genero, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async genero(data: Prisma.GeneroWhereUniqueInput): Promise<Genero | null> {
    return this.prisma.genero.findUnique({
      where: data,
    });
  }

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async getByIdGenero(id: number) {
    return this.prisma.genero.findUnique({
      where: { id },
    });
  }

  async createGenero(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({ data });
  }

  async updateGenero(id: number, data: CreateGeneroDto): Promise<Genero> {
    return this.prisma.genero.update({
      where: { id },
      data,
    });
  }

  async deleteGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({
      where,
    });
  }

  async deleteAll() {
    return this.prisma.genero.deleteMany({});
  }
}
