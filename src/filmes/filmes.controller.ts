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

  //Route for get all movies
  @Get('/list')
  @UsePipes(ValidationPipe)
  async index(): Promise<Filme[]> {
    return this.filmesService.getAll();
  }

  //Route for get movie by id
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getById(@Param('id') id: string) {
    return this.filmesService.getByIdFilme(+id);
  }

  //Route for create a movie
  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.createFilme(createFilme);
  }

  //Route for update a movie
  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string, //id como string pq vem da URL
    @Body() filme: CreateFilmeDto,
  ): Promise<Filme> {
    return this.filmesService.updateFilme(+id, filme);
  }

  //Route for delete a movie
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteFilme(@Param('id') id: string): Promise<Filme> {
    return this.filmesService.deleteFilme({ id: Number(id) });
  }

  //Route for delete all movies in DB
  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.filmesService.deleteAll();
  }
}
