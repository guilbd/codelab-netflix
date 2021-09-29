import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';

@Module({
  providers: [GeneroService]
})
export class GeneroModule {}
