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
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { Participante } from '.prisma/client';

@Controller('/filmes')
export class ParticipantesController {
  constructor(private participantesService: ParticipantesService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async index(): Promise<Participante[]> {
    return this.participantesService.getAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getById(@Param('id') id: string) {
    return this.participantesService.getByIdParticipante(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createParticipante: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.participantesService.createParticipante(createParticipante);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string, //id como string pq vem da URL
    @Body() participante: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.participantesService.updateParticipante(+id, participante);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteFilme(@Param('id') id: string): Promise<Participante> {
    return this.participantesService.deleteParticipante({ id: Number(id) });
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.participantesService.deleteAll();
  }
}
