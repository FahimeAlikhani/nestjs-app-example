/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateLocationDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  user_id: number;
  voice_id: number;

  @ApiProperty()
  @IsNotEmpty()
  location_add: string;

  @ApiProperty()
  @IsNotEmpty()
  text: string;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;
}
export class locationData {
  id: 1;
  user_id: 1;
  voice_id: 1;
  location_add: 'location_add';
  text: 'text';
  create_date: '20211023';
}
