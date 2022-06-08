import { Injectable, Param } from '@nestjs/common';
import { Seener as SeenerModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { seenerData as CreateSeenerDto } from '../dtos/CreateSeenerDto';

@Injectable()
export class SeenerService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<SeenerModel[]> {
    return this.prisma.seener.findMany();
  }

  async findById(@Param('id') id: number): Promise<SeenerModel | undefined> {
    return this.prisma.seener.findUnique({
      where: { id: Number(id) },
    });
  }

  async createSeener(seenerData: CreateSeenerDto): Promise<SeenerModel> {
    return this.prisma.seener.create({
      data: seenerData,
    });
  }
  async updateSeener(params: {
    where: Prisma.SeenerWhereUniqueInput;
    data: Prisma.SeenerUpdateInput;
  }): Promise<SeenerModel> {
    const { where, data } = params;
    return this.prisma.seener.update({
      data,
      where,
    });
  }

  async deleteSeener(
    where: Prisma.SeenerWhereUniqueInput,
  ): Promise<SeenerModel> {
    return this.prisma.seener.delete({
      where,
    });
  }
}
