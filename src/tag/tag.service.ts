import { Injectable, Param } from '@nestjs/common';
import { Tag as TagModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { tagData as CreateTagDto } from '../dtos/CreateTagDto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<TagModel[]> {
    return this.prisma.tag.findMany();
  }

  async findById(@Param('id') id: number): Promise<TagModel | undefined> {
    return this.prisma.tag.findUnique({
      where: { id: Number(id) },
    });
  }

  async createTag(tagData: CreateTagDto): Promise<TagModel> {
    return this.prisma.tag.create({
      data: tagData,
    });
  }
  async updateTag(params: {
    where: Prisma.TagWhereUniqueInput;
    data: Prisma.TagUpdateInput;
  }): Promise<TagModel> {
    const { where, data } = params;
    return this.prisma.tag.update({
      data,
      where,
    });
  }

  async deleteTag(where: Prisma.TagWhereUniqueInput): Promise<TagModel> {
    return this.prisma.tag.delete({
      where,
    });
  }
}
