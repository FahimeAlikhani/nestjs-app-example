import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment as CommentModel } from '@prisma/client';
import { commentData as CreateCommentDto } from '../dtos/CreateCommentDto';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async getAllComments(): Promise<CommentModel[]> {
    return this.commentService.findAll();
  }

  @Get('/comment :id')
  async getCommentById(@Param('id') id: number): Promise<CommentModel> {
    return this.commentService.findById(id);
  }

  @Post('/comment')
  async signupComment(
    @Body()
    commentData: CreateCommentDto,
  ): Promise<CommentModel> {
    return this.commentService.createComment(commentData);
  }

  @Put(' /comment :id')
  async updateComment(@Param('id') id: number): Promise<CommentModel> {
    return this.commentService.updateComment({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('comment/:id')
  async deleteComment(@Param('id') id: number): Promise<CommentModel> {
    return this.commentService.deleteComment({ id: Number(id) });
  }
}
