import { isNotEmpty, IsNotEmpty, IsOptional } from 'class-validator';
import { Prisma } from '.prisma/client';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: string;
  ator_staff: string;
  filme: number;
}
