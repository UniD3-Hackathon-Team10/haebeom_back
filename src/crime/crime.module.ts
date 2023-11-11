import { Module } from '@nestjs/common';
import { CrimeController } from './crime.controller';
import { CrimeService } from './CrimeService';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CrimeController],
  providers: [CrimeService, PrismaService],
})
export class CrimeModule {}
