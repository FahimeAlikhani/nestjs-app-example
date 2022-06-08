import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { userData as CreateUserDto } from '../dtos/CreateUserDto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.findAll();
  }

  @Get('/user :id')
  async getUserById(@Param('id') id: number): Promise<UserModel> {
    return this.userService.findById(id);
  }

  @Get('/user :friend_id')
  async getFriends(
    @Param('id') userId: number,
    friendId: number,
  ): Promise<UserModel> {
    return this.userService.addFriend(userId, friendId);
  }

  @Post('user')
  async signupUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put(' /user :id')
  async updateUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
