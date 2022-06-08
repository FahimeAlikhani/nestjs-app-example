import { Injectable, Param } from '@nestjs/common';
import { Comment as CommentModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CommentNotFoundException } from '../exceptions/CommentNotFound.exception';
import { commentData as CreateCommentDto } from '../dtos/createCommentDto';
import { PrismaError } from 'src/utils/prismaError';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CommentModel[]> {
    return this.prisma.comment.findMany();
  }

  async findById(@Param('id') id: number): Promise<CommentModel | undefined> {
    return this.prisma.comment.findUnique({
      where: { id: Number(id) },
    });
  }

  async createComment(commentData: CreateCommentDto): Promise<CommentModel> {
    return this.prisma.comment.create({
      data: commentData,
    });
  }
  async updateComment(params: {
    where: Prisma.CommentWhereUniqueInput;
    data: Prisma.CommentUpdateInput;
  }): Promise<CommentModel> {
    const { where, data } = params;
    if (!where) {
      throw new CommentNotFoundException(Number(where));
    }
    return this.prisma.comment.update({
      data,
      where,
    });
  }

  async deleteComment(
    where: Prisma.CommentWhereUniqueInput,
  ): Promise<CommentModel> {
    try {
      return this.prisma.comment.delete({
        where,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new CommentNotFoundException(Number(where));
      }
      throw error;
    }
  }
}
