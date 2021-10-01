import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GeneroController } from './genero.controller';

@Module({
  imports: [PrismaModule],
  providers: [GeneroService],
  controllers: [GeneroController],
})
export class GeneroModule {}
