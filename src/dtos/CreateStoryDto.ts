/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStoryDto {
  @IsNotEmpty()
  id: number;
  
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  picture_add: string;

  @IsNotEmpty()
  video_add: string;

  @IsNotEmpty()
  create_date: Date;

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
