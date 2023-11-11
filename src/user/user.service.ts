import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import ServiceResult from 'src/utils/serviceResult';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  public async login(deviceId) {
    try {
      const data = await this.prisma.user.findUnique({
        where: { deviceId: deviceId },
      });
      if (data) {
        const serviceResult: ServiceResult = {
          code: 200,
          message: 'Already Exist!',
          data: data,
        };
        return serviceResult;
      }
      const info = await this.prisma.user.create({
        data: { deviceId: deviceId },
      });

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
          message: 'Invalid User',
          data: ['Invalid User'],
        };
        return serviceResult;
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
