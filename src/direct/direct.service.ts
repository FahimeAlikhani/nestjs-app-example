import { Injectable, Param } from '@nestjs/common';
import { Direct as DirectModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { directData as CreateDirectDto } from '../dtos/CreateDirectDto';

@Injectable()
export class DirectService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<DirectModel[]> {
    return this.prisma.direct.findMany();
  }

  async findById(@Param('id') id: number): Promise<DirectModel | undefined> {
    return this.prisma.direct.findUnique({
      where: { id: Number(id) },
    });
  }

  async createDirect(directData: CreateDirectDto): Promise<DirectModel> {
    return this.prisma.direct.create({
      data: directData,
    });
  }
  async updateDirect(params: {
    where: Prisma.DirectWhereUniqueInput;
    data: Prisma.DirectUpdateInput;
  }): Promise<DirectModel> {
    const { where, data } = params;
    return this.prisma.direct.update({
      data,
      where,
    });
  }

  async deleteDirect(
    where: Prisma.DirectWhereUniqueInput,
  ): Promise<DirectModel> {
    return this.prisma.direct.delete({
      where,
    });
  }
}
