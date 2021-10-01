import { IsOptional } from 'class-validator';

export class UpdateParticipanteDto {
  @IsOptional()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  data_nascimento: string;

  @IsOptional()
  ator_staff: string;

  @IsOptional()
  filme: number;
}
