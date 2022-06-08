/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDirectDto {
  @IsNotEmpty()
  id: number;

  @IsNumber()
  directer_id?: number;

  @IsNumber()
  directed_id?: number;

  @IsString()
  text: string;

  @IsString()
  picture_add: string;

  @IsString()
  video_add: string;

  @IsString()
  file_add: string;

  @IsString()
  voice_add: string;

  @IsString()
  audio_add: string;

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
