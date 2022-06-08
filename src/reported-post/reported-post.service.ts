import { Injectable, Param } from '@nestjs/common';
import { Reported_Post as ReportedPostModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { reportedPostData as CreateReportedPostDto } from '../dtos/createReportedPostDto';

@Injectable()
export class ReportedPostService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ReportedPostModel[]> {
    return this.prisma.reported_Post.findMany();
  }

  async findById(
    @Param('id') id: number,
  ): Promise<ReportedPostModel | undefined> {
    return this.prisma.reported_Post.findUnique({
      where: { id: Number(id) },
    });
  }

  async createReportedPost(
    reportedPostData: CreateReportedPostDto,
  ): Promise<ReportedPostModel> {
    return this.prisma.reported_Post.create({
      data: reportedPostData,
    });
  }
  async updateReportedPost(params: {
    where: Prisma.Reported_PostWhereUniqueInput;
    data: Prisma.Reported_PostUpdateInput;
  }): Promise<ReportedPostModel> {
    const { where, data } = params;
    return this.prisma.reported_Post.update({
      data,
      where,
    });
  }

  async deleteReportedPost(
    where: Prisma.Reported_PostWhereUniqueInput,
  ): Promise<ReportedPostModel> {
    return this.prisma.reported_Post.delete({
      where,
    });
  }
}
