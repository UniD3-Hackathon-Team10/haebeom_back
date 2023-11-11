import { Module } from '@nestjs/common';
import { ClaimController } from './claim.controller';
import { ClaimService } from './claim.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ClaimController],
  providers: [ClaimService, PrismaService],
})
export class ClaimModule {}
