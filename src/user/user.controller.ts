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
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@ApiHeader({
  name: 'userProfile',
  description: 'all users profile',
})
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserModel> {
    return this.userService.findById(id);
  }

  @Get(':friend_id')
  async getFriends(
    @Param('id') userId: number,
    friendId: number,
  ): Promise<UserModel> {
    return this.userService.addFriend(userId, friendId);
  }

  @Post('')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signupUser(
    @Body()
    userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
