import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag as TagModel } from '@prisma/client';
import { tagData as CreateTagDto } from '../dtos/CreateTagDto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('tag')
@ApiHeader({
  name: 'tag',
  description: 'all users posts tags',
})
@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  async getAllTags(): Promise<TagModel[]> {
    return this.tagService.findAll();
  }

  @Get('/tag :id')
  async getTagById(@Param('id') id: number): Promise<TagModel> {
    return this.tagService.findById(id);
  }

  @Post('/tag')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signupTag(
    @Body()
    tagData: CreateTagDto,
  ): Promise<TagModel> {
    return this.tagService.createTag(tagData);
  }

  @Put(' /tag :id')
  async updateTag(@Param('id') id: string): Promise<TagModel> {
    return this.tagService.updateTag({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('tag/:id')
  async deleteTag(@Param('id') id: string): Promise<TagModel> {
    return this.tagService.deleteTag({ id: Number(id) });
  }
}
