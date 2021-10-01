import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  data_lancamento: string;

  @IsOptional()
  tempo_duracao: string;
}
