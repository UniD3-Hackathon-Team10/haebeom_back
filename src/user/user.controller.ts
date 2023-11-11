import { Controller, Post, Req, Res } from '@nestjs/common';
import ServiceResult from 'src/utils/serviceResult';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/login')
  async login(@Req() req, @Res() res: Response) {
    console.log('---- Interworking with Account Information ----');
    const serviceResult: ServiceResult = await this.userService.login(
      req.body.deviceId,
    );

    if (serviceResult.code === 200)
      return res.status(200).json(serviceResult.data);
    else return res.status(serviceResult.code).json(serviceResult.data);
  }
}
