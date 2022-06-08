import { Injectable, Param } from '@nestjs/common';
import { User as UserModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { userData as CreateUserDto } from '../dtos/CreateUserDto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  async findById(@Param('id') id: number): Promise<UserModel | undefined> {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }

  async createUser(userData: CreateUserDto): Promise<UserModel> {
    return this.prisma.user.create({
      data: userData,
    });
  }
  async addFriend(userId: number, friendId: number): Promise<UserModel> {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        friends: {
          connect: {
            id: friendId,
          },
        },
      },
      include: {
        friends: true,
      },
    });
  }
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<UserModel> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<UserModel> {
    return this.prisma.user.delete({
      where,
    });
  }
}
