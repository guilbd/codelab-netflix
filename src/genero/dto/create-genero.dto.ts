import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGeneroDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  filme: number;
}
