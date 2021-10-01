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

  @Get('/list')
  @UsePipes(ValidationPipe)
  async index(): Promise<Genero[]> {
    return this.generoService.getAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getById(@Param('id') id: string) {
    return this.generoService.getByIdGenero(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<Genero> {
    return this.generoService.createGenero(createGenero);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string, //id como string pq vem da URL
    @Body() genero: CreateGeneroDto,
  ): Promise<Genero> {
    return this.generoService.updateGenero(+id, genero);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteGenero(@Param('id') id: string): Promise<Genero> {
    return this.generoService.deleteGenero({ id: Number(id) });
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.generoService.deleteAll();
  }
}
