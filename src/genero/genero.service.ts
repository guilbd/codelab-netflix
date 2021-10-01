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

  //Function for get all genres
  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  //Function for get a genre by id
  async getByIdGenero(id: number) {
    return this.prisma.genero.findUnique({
      where: { id },
    });
  }

  //Function for create a genre
  async createGenero(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({ data });
  }

  //Function for update a genre
  async updateGenero(id: number, data: CreateGeneroDto): Promise<Genero> {
    return this.prisma.genero.update({
      where: { id },
      data,
    });
  }

  //Function for delete a genre
  async deleteGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({
      where,
    });
  }

  //Function for delete all genres in DB
  async deleteAll() {
    return this.prisma.genero.deleteMany({});
  }
}
