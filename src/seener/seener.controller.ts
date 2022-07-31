import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { SeenerService } from './seener.service';
import { Seener as SeenerModel } from '@prisma/client';
import { seenerData as CreateSeenerDto } from '../dtos/CreateSeenerDto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('seener')
@ApiHeader({
  name: 'postSeener',
  description: 'all users post Seener',
})
@Controller('seener')
export class SeenerController {
  constructor(private seenerService: SeenerService) {}

  @Get()
  async getAllSeener(): Promise<SeenerModel[]> {
    return this.seenerService.findAll();
  }

  @Get('/seener :id')
  async getSeenerById(@Param('id') id: number): Promise<SeenerModel> {
    return this.seenerService.findById(id);
  }

  @Post('/seener')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signupSeener(
    @Body()
    seenerData: CreateSeenerDto,
  ): Promise<SeenerModel> {
    return this.seenerService.createSeener(seenerData);
  }

  @Put(' /seener :id')
  async updateSeener(@Param('id') id: number): Promise<SeenerModel> {
    return this.seenerService.updateSeener({
      where: { id: Number(id) },
      data: {},
    });
  }

  @Delete('seener/:id')
  async deleteSeener(@Param('id') id: number): Promise<SeenerModel> {
    return this.seenerService.deleteSeener({ id: Number(id) });
  }
}
