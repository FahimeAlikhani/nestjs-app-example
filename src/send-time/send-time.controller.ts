import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { SendTimeService } from './send-time.service';
import { Send_Time as SendTimeModel } from '@prisma/client';
import { sendTimeData as CreateSendTimeDto } from '../dtos/CreateSendTimeDto';

@Controller('sendTime')
export class SendTimeController {
  constructor(private sendTimeService: SendTimeService) {}

  @Get()
  async getAllSendTimes(): Promise<SendTimeModel[]> {
    return this.sendTimeService.findAll();
  }

  @Get('/sendTime :id')
  async getSendTimeById(@Param('id') id: number): Promise<SendTimeModel> {
    return this.sendTimeService.findById(id);
  }

  @Post('/sendTime')
  async signupSendTime(
    @Body()
    sendTimeData: CreateSendTimeDto,
  ): Promise<SendTimeModel> {
    return this.sendTimeService.createSendTime(sendTimeData);
  }

  @Put(' /sendTime :id')
  async updateSendTime(@Param('id') id: string): Promise<SendTimeModel> {
    return this.sendTimeService.updateSendTime({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('sendTime/:id')
  async deleteSendTime(@Param('id') id: string): Promise<SendTimeModel> {
    return this.sendTimeService.deleteSendTime({ id: Number(id) });
  }
}
