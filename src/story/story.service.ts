import { Injectable, Param } from '@nestjs/common';
import { Story as StoryModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { storyData as CreateStoryDto } from '../dtos/CreateStoryDto';

@Injectable()
export class StoryService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<StoryModel[]> {
    return this.prisma.story.findMany();
  }

  async findByUserId(
    @Param('id_seener') id_seener: number,
  ): Promise<StoryModel | undefined> {
    return this.prisma.story.findUnique({
      where: { id: Number(id_seener) },
    });
  }

  async createStory(storyData: CreateStoryDto): Promise<StoryModel> {
    return this.prisma.story.create({
      data: storyData,
    });
  }
  async updateStory(params: {
    where: Prisma.StoryWhereUniqueInput;
    data: Prisma.StoryUpdateInput;
  }): Promise<StoryModel> {
    const { where, data } = params;
    return this.prisma.story.update({
      data,
      where,
    });
  }

  async deleteStory(where: Prisma.StoryWhereUniqueInput): Promise<StoryModel> {
    return this.prisma.story.delete({
      where,
    });
  }
}
