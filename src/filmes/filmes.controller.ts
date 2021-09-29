import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { Filme } from '.prisma/client';

@Controller('/filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async index(): Promise<Filme[]> {
    return this.filmesService.getAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getById(@Param('id') id: string) {
    return this.filmesService.getByIdFilme(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.createFilme(createFilme);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string, //id como string pq vem da URL
    @Body() filme: CreateFilmeDto,
  ): Promise<Filme> {
    return this.filmesService.updateFilme(+id, filme);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteFilme(@Param('id') id: string): Promise<Filme> {
    return this.filmesService.deleteFilme({ id: Number(id) });
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.filmesService.deleteAll();
  }
}
