import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ParticipantesService],
  controllers: [ParticipantesController],
})
export class ParticipantesModule {}
