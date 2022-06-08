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

@Controller('voice')
export class VoiceController {
  constructor(private voiceService: VoiceService) {}

  @Get()
  async getAllVoices(): Promise<VoiceModel[]> {
    return this.voiceService.findAll();
  }

  @Get('/voice :id')
  async getVoiceById(@Param('id') id: number): Promise<VoiceModel> {
    return this.voiceService.findById(id);
  }

  @Post('voice')
  async signupVoice(
    @Body()
    voiceData: CreateVoiceDto,
  ): Promise<VoiceModel> {
    return this.voiceService.createVoice(voiceData);
  }

  @Put(' /voice :id')
  async updateVoice(@Param('id') id: string): Promise<VoiceModel> {
    return this.voiceService.updateVoice({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('voice/:id')
  async deleteVoice(@Param('id') id: string): Promise<VoiceModel> {
    return this.voiceService.deleteVoice({ id: Number(id) });
  }
}
