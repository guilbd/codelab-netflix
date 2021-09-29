import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async filme(
    filmeWhereUniqueInput: Prisma.FilmeWhereUniqueInput,
  ): Promise<Filme | null> {
    return this.prisma.filme.findUnique({
      where: filmeWhereUniqueInput,
    });
  }

  async filmes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FilmeWhereUniqueInput;
    where?: Prisma.FilmeWhereInput;
    orderBy?: Prisma.FilmeOrderByWithRelationInput;
  }): Promise<Filme[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.filme.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async getByIdFilme(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
    });
  }

  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async updateFilme(id: number, data: Prisma.FilmeUpdateInput): Promise<Filme> {
    return this.prisma.filme.update({
      where: { id },
      data,
    });
  }

  async deleteFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({
      where,
    });
  }

  async deleteAll() {
    return this.prisma.filme.deleteMany({});
  }
}
