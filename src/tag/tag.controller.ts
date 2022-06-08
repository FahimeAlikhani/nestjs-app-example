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
