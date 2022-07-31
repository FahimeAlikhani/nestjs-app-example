import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { Location as LocationModel } from '@prisma/client';
import { locationData as CreateLocationDto } from '../dtos/CreateLocationDto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
@ApiTags('location')
@ApiHeader({
  name: 'location',
  description: 'all users pictures location',
})
@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  async getAllLocations(): Promise<LocationModel[]> {
    return this.locationService.findAll();
  }

  @Get('/location :id')
  async getLocationById(@Param('id') id: number): Promise<LocationModel> {
    return this.locationService.findById(id);
  }

  @Post('/location')
  async signupLocation(
    @Body()
    locationData: CreateLocationDto,
  ): Promise<LocationModel> {
    return this.locationService.createLocation(locationData);
  }

  @Put(' /location :id')
  async updateLocation(@Param('id') id: string): Promise<LocationModel> {
    return this.locationService.updateLocation({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('location/:id')
  async deleteLocation(@Param('id') id: string): Promise<LocationModel> {
    return this.locationService.deleteLocation({ id: Number(id) });
  }
}
