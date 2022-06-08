import { Injectable, Param } from '@nestjs/common';
import { Voice as VoiceModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { voiceData as CreateVoiceDto } from '../dtos/createVoiceDto';

@Injectable()
export class VoiceService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<VoiceModel[]> {
    return this.prisma.voice.findMany();
  }

  async findById(@Param('id') id: number): Promise<VoiceModel | undefined> {
    return this.prisma.voice.findUnique({
      where: { id: Number(id) },
    });
  }

  async createVoice(voiceData: CreateVoiceDto): Promise<VoiceModel> {
    return this.prisma.voice.create({
      data: voiceData,
    });
  }
  async updateVoice(params: {
    where: Prisma.VoiceWhereUniqueInput;
    data: Prisma.VoiceUpdateInput;
  }): Promise<VoiceModel> {
    const { where, data } = params;
    return this.prisma.voice.update({
      data,
      where,
    });
  }

  async deleteVoice(where: Prisma.VoiceWhereUniqueInput): Promise<VoiceModel> {
    return this.prisma.voice.delete({
      where,
    });
  }
}
