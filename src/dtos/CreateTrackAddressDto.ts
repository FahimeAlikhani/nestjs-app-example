/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTrackAddressDto {
  @IsNumber()
  id: number;

  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  start_time: Date;

  @IsNotEmpty()
  duration: number;

  @IsNotEmpty()
  distance: number;

  @IsNotEmpty()
  type: Track_Type;

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
