import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { VoiceService } from './voice.service';
import { Voice as VoiceModel } from '@prisma/client';
import { voiceData as CreateVoiceDto } from '../dtos/CreateVoiceDto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('voice')
@ApiHeader({
  name: 'userVoice',
  description: 'all users voice',
})
@Controller('/voice')
export class VoiceController {
  constructor(private voiceService: VoiceService) {}

  @Get()
  async getAllVoices(): Promise<VoiceModel[]> {
    return this.voiceService.findAll();
  }

  @Get(':id')
  async getVoiceById(@Param('id') id: number): Promise<VoiceModel> {
    return this.voiceService.findById(id);
  }

  @Post('')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signupVoice(
    @Body()
    voiceData: CreateVoiceDto,
  ): Promise<VoiceModel> {
    return this.voiceService.createVoice(voiceData);
  }

  @Put(':id')
  async updateVoice(@Param('id') id: string): Promise<VoiceModel> {
    return this.voiceService.updateVoice({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete(':id')
  async deleteVoice(@Param('id') id: string): Promise<VoiceModel> {
    return this.voiceService.deleteVoice({ id: Number(id) });
  }
}
