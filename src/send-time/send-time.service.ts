import { Injectable, Param } from '@nestjs/common';
import { Send_Time as SendTimeModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { sendTimeData as CreateSendTimeDto } from '../dtos/CreateSendTimeDto';

@Injectable()
export class SendTimeService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<SendTimeModel[]> {
    return this.prisma.send_Time.findMany();
  }

  async findById(@Param('id') id: number): Promise<SendTimeModel | undefined> {
    return this.prisma.send_Time.findUnique({
      where: { id: Number(id) },
    });
  }

  async createSendTime(
    sendTimeData: CreateSendTimeDto,
  ): Promise<SendTimeModel> {
    return this.prisma.send_Time.create({
      data: sendTimeData,
    });
  }
  async updateSendTime(params: {
    where: Prisma.Send_TimeWhereUniqueInput;
    data: Prisma.Send_TimeUpdateInput;
  }): Promise<SendTimeModel> {
    const { where, data } = params;
    return this.prisma.send_Time.update({
      data,
      where,
    });
  }

  async deleteSendTime(
    where: Prisma.Send_TimeWhereUniqueInput,
  ): Promise<SendTimeModel> {
    return this.prisma.send_Time.delete({
      where,
    });
  }
}
