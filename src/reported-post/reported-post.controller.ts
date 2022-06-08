import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ReportedPostService } from './reported-post.service';
import { Reported_Post as ReportedPostModel } from '@prisma/client';
import { reportedPostData as CreateReportedPostDto } from '../dtos/CreateReportedPostDto';

@Controller('reportedPost')
export class ReportedPostController {
  constructor(private reportedPostService: ReportedPostService) {}

  @Get()
  async getAllReportedPosts(): Promise<ReportedPostModel[]> {
    return this.reportedPostService.findAll();
  }

  @Get('/reportedPost :id')
  async getReportedPostById(
    @Param('id') id: number,
  ): Promise<ReportedPostModel> {
    return this.reportedPostService.findById(id);
  }

  @Post('/reportedPost')
  async signupReportedPost(
    @Body()
    reportedPostData: CreateReportedPostDto,
  ): Promise<ReportedPostModel> {
    return this.reportedPostService.createReportedPost(reportedPostData);
  }

  @Put(' /reportedPost :id')
  async updateReportedPost(
    @Param('id') id: string,
  ): Promise<ReportedPostModel> {
    return this.reportedPostService.updateReportedPost({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('reportedPost/:id')
  async deleteReportedPost(
    @Param('id') id: string,
  ): Promise<ReportedPostModel> {
    return this.reportedPostService.deleteReportedPost({ id: Number(id) });
  }
}
