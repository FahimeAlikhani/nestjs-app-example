import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { FollowsService } from './follows.service';
import { Follows as FollowsModel } from '@prisma/client';
import { followsData as CreateFollowsDto } from '../dtos/CreateFollowsDto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
@ApiTags('follows')
@ApiHeader({
  name: 'follower & foollowing',
  description: 'all users followers & foollowings',
})
@Controller('follows')
export class FollowsController {
  constructor(private followsService: FollowsService) {}

  @Get()
  async getAllFollows(): Promise<FollowsModel[]> {
    return this.followsService.findAll();
  }

  @Get('/follows :id')
  async getFollowsById(@Param('id') id: string): Promise<FollowsModel> {
    return this.followsService.findById(id);
  }

  @Post('/follows')
  async signupFollows(
    @Body()
    followsData: CreateFollowsDto,
  ): Promise<FollowsModel> {
    return this.followsService.createFollows(followsData);
  }

  @Put(' /follows :id')
  async updateFollows(@Param('id') id: string): Promise<FollowsModel> {
    return this.followsService.updateFollows({
      where: {
        follower_id_following_id: {
          follower_id: Number(id),
          following_id: Number(id),
        },
      },
      data: {},
    });
  }

  @Delete('follows/:id')
  async deleteFollows(@Param('id') id: string): Promise<FollowsModel> {
    return this.followsService.deleteFollows({
      follower_id_following_id: {
        follower_id: Number(id),
        following_id: Number(id),
      },
    });
  }
}
