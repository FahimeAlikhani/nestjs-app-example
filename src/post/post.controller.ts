import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';
import { postData as CreatePostDto } from '../dtos/CreatePostDto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPosts(): Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Get('/post :id')
  async getPostById(@Param('id') id: number): Promise<PostModel> {
    return this.postService.findById(id);
  }

  @Post('/post')
  async signupPost(
    @Body()
    postData: CreatePostDto,
  ): Promise<PostModel> {
    return this.postService.createPost(postData);
  }

  @Put(' /post :id')
  async updatePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
