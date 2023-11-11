import { CrimeService } from './CrimeService';
import { Response } from 'express';
import ServiceResult from 'src/utils/serviceResult';
import { Controller, Post, Req, Res, Get, Param } from '@nestjs/common';

@Controller('crime')
export class CrimeController {
  constructor(private crimeService: CrimeService) {}

  @Get('')
  async getCrime(@Req() req, @Res() res: Response) {
    const serviceResult: ServiceResult = await this.crimeService.getCrime();

    if (serviceResult.code === 200)
      return res.status(200).json(serviceResult.data);
    else return res.status(serviceResult.code).json(serviceResult.data);
  }
}
