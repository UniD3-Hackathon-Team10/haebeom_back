import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import ServiceResult from 'src/utils/serviceResult';
import PostDto from './post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  public async getPost() {
    try {
      const info = await this.prisma.post.findMany();

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

  public async createPost(post: PostDto) {
    try {
      const info = await this.prisma.post.create({ data: post });

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
