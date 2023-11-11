import { Response } from 'express';
import ServiceResult from 'src/utils/serviceResult';
import { ClaimService } from './claim.service';
import { Controller, Post, Req, Res, Get, Param } from '@nestjs/common';
import ClaimDto from './claim.dto';

@Controller('claim')
export class ClaimController {
    constructor(private claimService: ClaimService) {}

    @Post('')
    async createClaim(@Req() req, @Res() res: Response) {
      const serviceResult: ServiceResult = await this.claimService.createClaim(
        req.body as ClaimDto,
      );
  
      if (serviceResult.code === 200)
        return res.status(200).json(serviceResult.data);
      else return res.status(serviceResult.code).json(serviceResult.data);
    }}
