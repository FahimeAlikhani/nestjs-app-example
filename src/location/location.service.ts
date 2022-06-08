import { Injectable, Param } from '@nestjs/common';
import { Location as LocationModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { locationData as CreateLocationDto } from '../dtos/CreateLocationDto';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<LocationModel[]> {
    return this.prisma.location.findMany();
  }

  async findById(@Param('id') id: number): Promise<LocationModel | undefined> {
    return this.prisma.location.findUnique({
      where: { id: Number(id) },
    });
  }

  async createLocation(
    locationData: CreateLocationDto,
  ): Promise<LocationModel> {
    return this.prisma.location.create({
      data: locationData,
    });
  }
  async updateLocation(params: {
    where: Prisma.LocationWhereUniqueInput;
    data: Prisma.LocationUpdateInput;
  }): Promise<LocationModel> {
    const { where, data } = params;
    return this.prisma.location.update({
      data,
      where,
    });
  }

  async deleteLocation(
    where: Prisma.LocationWhereUniqueInput,
  ): Promise<LocationModel> {
    return this.prisma.location.delete({
      where,
    });
  }
}
