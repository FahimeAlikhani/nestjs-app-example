import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { TrackAddressService } from './track-address.service';
import { Track_address as TrackAddressModel } from '@prisma/client';
import { trackAddressData as CreateTrackAddressDto } from '../dtos/CreateTrackAddressDto';

@Controller('trackAddress')
export class TrackAddressController {
  constructor(private trackAddressService: TrackAddressService) {}

  @Get()
  async getAllTrackAddresss(): Promise<TrackAddressModel[]> {
    return this.trackAddressService.findAll();
  }

  @Get('/trackAddress :id')
  async getTrackAddressById(
    @Param('id') id: number,
  ): Promise<TrackAddressModel> {
    return this.trackAddressService.findById(id);
  }

  @Post('/trackAddress')
  async signupTrackAddress(
    @Body()
    trackAddressData: CreateTrackAddressDto,
  ): Promise<TrackAddressModel> {
    return this.trackAddressService.createTrackAddress(trackAddressData);
  }

  @Put(' /trackAddress :id')
  async updateTrackAddress(
    @Param('id') id: string,
  ): Promise<TrackAddressModel> {
    return this.trackAddressService.updateTrackAddress({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('trackAddress/:id')
  async deleteTrackAddress(
    @Param('id') id: string,
  ): Promise<TrackAddressModel> {
    return this.trackAddressService.deleteTrackAddress({ id: Number(id) });
  }
}
