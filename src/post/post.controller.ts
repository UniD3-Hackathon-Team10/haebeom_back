import { Response } from 'express';
import ServiceResult from 'src/utils/serviceResult';
import { PostService } from './post.service';
import { Controller, Post, Req, Res, Get, Param } from '@nestjs/common';
import PostDto from './post.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('')
  async getPost(@Req() req, @Res() res: Response) {
    const serviceResult: ServiceResult = await this.postService.getPost();

    if (serviceResult.code === 200)
      return res.status(200).json(serviceResult.data);
    else return res.status(serviceResult.code).json(serviceResult.data);
  }
  @Post('')
  async createPost(@Req() req, @Res() res: Response) {
    const serviceResult: ServiceResult = await this.postService.createPost(
      req.body as PostDto,
    );

    if (serviceResult.code === 200)
      return res.status(200).json(serviceResult.data);
    else return res.status(serviceResult.code).json(serviceResult.data);
  }
  @Post('/like')
  async likePost(@Req() req, @Res() res: Response) {
    const serviceResult: ServiceResult = await this.postService.likePost(
      req.body.userId,
      req.body.postId,
    );

    if (serviceResult.code === 200)
      return res.status(200).json(serviceResult.data);
    else return res.status(serviceResult.code).json(serviceResult.data);
  }
  @Get('/category/:id')
  async getCategoryPost(
    @Req() req,
    @Param('id') category,
    @Res() res: Response,
  ) {
    const serviceResult: ServiceResult =
      await this.postService.getCategoryPost(category);

    if (serviceResult.code === 200)
      return res.status(200).json(serviceResult.data);
    else return res.status(serviceResult.code).json(serviceResult.data);
  }
  @Get('/:id')
  async getPostDetail(@Req() req, @Param('id') postId, @Res() res: Response) {
    const serviceResult: ServiceResult =
      await this.postService.getPostDetail(postId);

    if (serviceResult.code === 200)
      return res.status(200).json(serviceResult.data);
    else return res.status(serviceResult.code).json(serviceResult.data);
  }
}
