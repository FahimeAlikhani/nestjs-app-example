/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateVoiceDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  voice_add: string;

  @IsNotEmpty()
  create_date: Date;
}
export class voiceData {
  id: 1;
  voice_add: 'http://kbkjg';
  create_date: '20211023';
}
