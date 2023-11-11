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
  public async getCategoryPost(category) {
    try {
      const info = await this.prisma.post.findMany({});
      if (info) {
        const filteredObjects = info.filter(
          (obj) => (obj.type & category) == category,
        );

        const serviceResult: ServiceResult = {
          code: 200,
          message: 'Success!',
          data: filteredObjects,
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

  public async likePost(userId, postId) {
    try {
      const likeData = {
        userId: parseInt(userId),
        postId: parseInt(postId),
      };
      var exPost = await this.prisma.post.findUnique({
        where: { id: parseInt(postId) },
      });
      if (exPost) {
        const info = await this.prisma.like.create({ data: likeData });
        exPost.likeCount = exPost.likeCount + 1;
        const post = await this.prisma.post.update({
          where: { id: parseInt(postId) },
          data: exPost,
        });
        if (info) {
          const serviceResult: ServiceResult = {
            code: 200,
            message: 'Success!',
            data: post,
          };
          return serviceResult;
        } else {
          const serviceResult: ServiceResult = {
            code: 404,
            message: 'No data',
          };
          return serviceResult;
        }
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

  public async getPostDetail(postId) {
    try {
      const info = await this.prisma.post.findUnique({
        where: { id: parseInt(postId) },
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
          message: 'No data',
        };
        return serviceResult;
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
