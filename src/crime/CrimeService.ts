import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import ServiceResult from 'src/utils/serviceResult';

@Injectable()
export class CrimeService {
  constructor(private prisma: PrismaService) {}
  public async getCrime() {
    try {
      const info = await this.prisma.crime.findMany();

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
