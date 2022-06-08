import { Injectable, Param } from '@nestjs/common';
import { Post as PostModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { postData as CreatePostDto } from '../dtos/createPostDto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PostModel[]> {
    return this.prisma.post.findMany();
  }

  async findById(@Param('id') id: number): Promise<PostModel | undefined> {
    return this.prisma.post.findUnique({
      where: { id: Number(id) },
    });
  }

  async createPost(postData: CreatePostDto): Promise<PostModel> {
    return this.prisma.post.create({
      data: postData,
    });
  }
  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<PostModel> {
    const { where, data } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<PostModel> {
    return this.prisma.post.delete({
      where,
    });
  }
}
