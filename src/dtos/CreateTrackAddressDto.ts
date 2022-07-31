/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTrackAddressDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  start_time: Date;

  @ApiProperty()
  @IsNotEmpty()
  duration: number;

  @ApiProperty()
  @IsNotEmpty()
  distance: number;

  @ApiProperty()
  @IsNotEmpty()
  type: Track_Type;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;
}

enum Track_Type {
  car,
  bicycle,
  walk,
  motorcycle,
}
Track_Type.car;
Track_Type.walk;
Track_Type.motorcycle;

export class trackAddressData {
  id: 1;
  user_id: 1;
  start_time: '20211023';
  duration: 23;
  distance: 3000;
  type: 'car';
  create_date: '20211023';
}
