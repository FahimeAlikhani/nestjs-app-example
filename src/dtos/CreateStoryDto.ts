/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateStoryDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
  
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  picture_add: string;

  @ApiProperty()
  @IsNotEmpty()
  video_add: string;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  update_date: Date;
}
export class storyData {
  id: 1;
  user_id: 1;
  picture_add: 'm';
  video_add: 'm';
  create_date: '20211023';
  update_date: '20211023';
}
