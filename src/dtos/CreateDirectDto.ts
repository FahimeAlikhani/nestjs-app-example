/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDirectDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNumber()
  directer_id?: number;

  @ApiProperty()
  @IsNumber()
  directed_id?: number;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsString()
  picture_add: string;

  @ApiProperty()
  @IsString()
  video_add: string;

  @ApiProperty()
  @IsString()
  file_add: string;

  @ApiProperty()
  @IsString()
  voice_add: string;

  @ApiProperty()
  @IsString()
  audio_add: string;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;
}

export class directData {
  id: 1;
  direter_id: 2;
  direted_id: 5;
  text: 'string';
  picture_add: 'string';
  video_add: 'string';
  file_add: 'string';
  voice_add: 'string';
  audio_add: 'string';
  create_date: '20211023';
}
