import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
