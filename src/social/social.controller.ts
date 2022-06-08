import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { SocialService } from './social.service';
import { Social as SocialModel } from '@prisma/client';
import { socialData as CreateSocialDto } from '../dtos/CreateSocialDto';

@Controller('social')
export class SocialController {
  constructor(private socialService: SocialService) {}

  @Get()
  async getAllSocials(): Promise<SocialModel[]> {
    return this.socialService.findAll();
  }

  @Get('/social :id')
  async getSocialById(@Param('id') id: number): Promise<SocialModel> {
    return this.socialService.findById(id);
  }

  @Post('social')
  async signupSocial(
    @Body()
    socialData: CreateSocialDto,
  ): Promise<SocialModel> {
    return this.socialService.createSocial(socialData);
  }

  @Put(' /social :id')
  async updateSocial(@Param('id') id: string): Promise<SocialModel> {
    return this.socialService.updateSocial({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('social/:id')
  async deleteSocial(@Param('id') id: string): Promise<SocialModel> {
    return this.socialService.deleteSocial({ id: Number(id) });
  }
}
