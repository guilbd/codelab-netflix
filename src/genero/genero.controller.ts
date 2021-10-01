import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from '.prisma/client';

@Controller('/genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  //Route for get all genres
  @Get('/list')
  @UsePipes(ValidationPipe)
  async index(): Promise<Genero[]> {
    return this.generoService.getAll();
  }

  //Route for get a genre by id
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getById(@Param('id') id: string) {
    return this.generoService.getByIdGenero(+id);
  }

  //Route for create a genre
  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<Genero> {
    return this.generoService.createGenero(createGenero);
  }

  //Route for update a genre
  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string, //id como string pq vem da URL
    @Body() genero: CreateGeneroDto,
  ): Promise<Genero> {
    return this.generoService.updateGenero(+id, genero);
  }

  //Route for delete a genre by id
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteGenero(@Param('id') id: string): Promise<Genero> {
    return this.generoService.deleteGenero({ id: Number(id) });
  }

  //Route for delete all genres in DB
  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.generoService.deleteAll();
  }
}
