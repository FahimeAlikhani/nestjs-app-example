import { Injectable, Param } from '@nestjs/common';
import { Social as SocialModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { socialData as CreateSocialDto } from '../dtos/createSocialDto';

@Injectable()
export class SocialService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<SocialModel[]> {
    return this.prisma.social.findMany();
  }

  async findById(@Param('id') id: number): Promise<SocialModel | undefined> {
    return this.prisma.social.findUnique({
      where: { id: Number(id) },
    });
  }

  async createSocial(socialData: CreateSocialDto): Promise<SocialModel> {
    return this.prisma.social.create({
      data: socialData,
    });
  }
  async updateSocial(params: {
    where: Prisma.SocialWhereUniqueInput;
    data: Prisma.SocialUpdateInput;
  }): Promise<SocialModel> {
    const { where, data } = params;
    return this.prisma.social.update({
      data,
      where,
    });
  }

  async deleteSocial(
    where: Prisma.SocialWhereUniqueInput,
  ): Promise<SocialModel> {
    return this.prisma.social.delete({
      where,
    });
  }
}
