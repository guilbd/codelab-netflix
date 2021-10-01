import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
  UsePipes,
  Patch,
} from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { Participante } from '.prisma/client';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Controller('/participantes')
export class ParticipantesController {
  constructor(private participantesService: ParticipantesService) {}

  //Route for get all participants
  @Get('/list')
  @UsePipes(ValidationPipe)
  async index(): Promise<Participante[]> {
    return this.participantesService.getAll();
  }

  //Route for get a particpant by id
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getById(@Param('id') id: string) {
    return this.participantesService.getByIdParticipante(+id);
  }

  //Route for create a particpant
  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createParticipante: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.participantesService.createParticipante(createParticipante);
  }

  //Route for update separate fields of one particpant
  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string, //id como string pq vem da URL
    @Body() participante: UpdateParticipanteDto,
  ): Promise<Participante> {
    return this.participantesService.updateParticipante(+id, participante);
  }

  //Route for delete a participant by id
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteFilme(@Param('id') id: string): Promise<Participante> {
    return this.participantesService.deleteParticipante({ id: Number(id) });
  }

  //Route for delete all participants in DB
  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.participantesService.deleteAll();
  }
}
