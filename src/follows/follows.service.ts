import { Injectable, Param } from '@nestjs/common';
import { Follows as FollowsModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { followsData as CreateFollowsDto } from '../dtos/CreateFollowsDto';

@Injectable()
export class FollowsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<FollowsModel[]> {
    return this.prisma.follows.findMany();
  }

  async findById(@Param('id') id: string): Promise<FollowsModel | undefined> {
    return this.prisma.follows.findUnique({
      where: {
        follower_id_following_id: {
          follower_id: Number(id),
          following_id: Number(id),
        },
      },
    });
  }

  async createFollows(followsData: CreateFollowsDto): Promise<FollowsModel> {
    return this.prisma.follows.create({
      data: followsData,
    });
  }
  async updateFollows(params: {
    where: Prisma.FollowsWhereUniqueInput;
    data: Prisma.FollowsUpdateInput;
  }): Promise<FollowsModel> {
    const { where, data } = params;
    return this.prisma.follows.update({
      data,
      where,
    });
  }

  async deleteFollows(
    where: Prisma.FollowsWhereUniqueInput,
  ): Promise<FollowsModel> {
    return this.prisma.follows.delete({
      where,
    });
  }
}
