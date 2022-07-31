import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { DirectService } from './direct.service';
import { Direct as DirectModel } from '@prisma/client';
import { directData as CreateDirectDto } from '../dtos/CreateDirectDto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
@ApiTags('direct')
@ApiHeader({
  name: 'direct',
  description: 'all user direct messages',
})
@Controller('direct')
export class DirectController {
  constructor(private directService: DirectService) {}

  @Get()
  async getAllDirects(): Promise<DirectModel[]> {
    return this.directService.findAll();
  }

  @Get('/direct :id')
  async getDirectById(@Param('id') id: number): Promise<DirectModel> {
    return this.directService.findById(id);
  }

  @Post('/direct')
  async signupDirect(
    @Body()
    directData: CreateDirectDto,
  ): Promise<DirectModel> {
    return this.directService.createDirect(directData);
  }

  @Put(' /direct :id')
  async updateDirect(@Param('id') id: string): Promise<DirectModel> {
    return this.directService.updateDirect({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('direct/:id')
  async deleteDirect(@Param('id') id: string): Promise<DirectModel> {
    return this.directService.deleteDirect({ id: Number(id) });
  }
}
