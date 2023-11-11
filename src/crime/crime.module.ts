import { Module } from '@nestjs/common';
import { CrimeController } from './crime.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrimeService } from './crime.service';

@Module({
  controllers: [CrimeController],
  providers: [CrimeService, PrismaService],
})
export class CrimeModule {}
