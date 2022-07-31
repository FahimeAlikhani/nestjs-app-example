/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateSendTimeDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
  
  @ApiProperty()
  @IsNotEmpty()
  post_id: number;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;
}
export class sendTimeData {
  id: 1;
  post_id: 1;
  create_date: '20211023';
}
