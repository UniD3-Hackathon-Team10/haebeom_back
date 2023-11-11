import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import ServiceResult from 'src/utils/serviceResult';
import PostDto from './claim.dto';
import ClaimDto from './claim.dto';

@Injectable()
export class ClaimService {
    constructor(private prisma: PrismaService) {}
    public async createClaim(claim: ClaimDto) {
        try {
          const info = await this.prisma.claim.create({ data: claim });
    
          if (info) {
            const serviceResult: ServiceResult = {
              code: 200,
              message: 'Success!',
              data: info,
            };
            return serviceResult;
          } else {
            const serviceResult: ServiceResult = {
              code: 404,
              message: 'No data',
            };
            return serviceResult;
          }
        } catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    
}
