import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { StoryService } from './story.service';
import { Story as StoryModel } from '@prisma/client';
import { storyData as CreateStoryDto } from '../dtos/CreateStoryDto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('story')
@ApiHeader({
  name: 'story',
  description: 'all users story',
})
@Controller('story')
export class StoryController {
  constructor(private storyService: StoryService) {}

  @Get()
  async getAllStorys(): Promise<StoryModel[]> {
    return this.storyService.findAll();
  }

  @Get('/story :id_seener')
  async getStoryById(
    @Param('id_seener') id_seener: number,
  ): Promise<StoryModel> {
    return this.storyService.findByUserId(id_seener);
  }

  @Post('/story')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signupStory(
    @Body()
    storyData: CreateStoryDto,
  ): Promise<StoryModel> {
    return this.storyService.createStory(storyData);
  }

  @Put(' /story :id')
  async updateStory(@Param('id') id: string): Promise<StoryModel> {
    return this.storyService.updateStory({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('story/:id')
  async deleteStory(@Param('id') id: string): Promise<StoryModel> {
    return this.storyService.deleteStory({ id: Number(id) });
  }
}
