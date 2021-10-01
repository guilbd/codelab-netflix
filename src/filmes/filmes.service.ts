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

  //Function for Get All movies
  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany({
      include: {
        participantes: {
          select: {
            nome: true,
            imagem: true,
            data_nascimento: true,
            ator_staff: true,
          },
        },
        genero: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  //Function for get a movie by id
  async getByIdFilme(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
      include: {
        participantes: {
          select: {
            nome: true,
            imagem: true,
            data_nascimento: true,
            ator_staff: true,
          },
        },
        genero: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  //Function for create a movie
  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  //Function for update a movie by id
  async updateFilme(id: number, data: Prisma.FilmeUpdateInput): Promise<Filme> {
    return this.prisma.filme.update({
      where: { id },
      data,
    });
  }

  //Function for delete a movie
  async deleteFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({
      where,
    });
  }

  //Function for delete all movies in DB
  async deleteAll() {
    return this.prisma.filme.deleteMany({});
  }
}
