/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateVoiceDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  voice_add: string;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;
}
export class voiceData {
  id: 1;
  voice_add: 'http://kbkjg';
  create_date: '20211023';
}
