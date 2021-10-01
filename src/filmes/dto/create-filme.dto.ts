import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_lancamento: string;
  tempo_duracao: string;
}
