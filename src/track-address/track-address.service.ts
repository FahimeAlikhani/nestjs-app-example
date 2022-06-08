import { Injectable, Param } from '@nestjs/common';
import { Track_address as TrackAddressModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { trackAddressData as CreateTrackAddressDto } from '../dtos/CreateTrackAddressDto';

@Injectable()
export class TrackAddressService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<TrackAddressModel[]> {
    return this.prisma.track_address.findMany();
  }

  async findById(
    @Param('id') id: number,
  ): Promise<TrackAddressModel | undefined> {
    return this.prisma.track_address.findUnique({
      where: { id: Number(id) },
    });
  }

  async createTrackAddress(
    trackAddressData: CreateTrackAddressDto,
  ): Promise<TrackAddressModel> {
    return this.prisma.track_address.create({
      data: trackAddressData,
    });
  }
  async updateTrackAddress(params: {
    where: Prisma.Track_addressWhereUniqueInput;
    data: Prisma.Track_addressUpdateInput;
  }): Promise<TrackAddressModel> {
    const { where, data } = params;
    return this.prisma.track_address.update({
      data,
      where,
    });
  }

  async deleteTrackAddress(
    where: Prisma.Track_addressWhereUniqueInput,
  ): Promise<TrackAddressModel> {
    return this.prisma.track_address.delete({
      where,
    });
  }
}
