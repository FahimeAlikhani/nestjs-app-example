/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  user_id: number;
  voice_id: number;

  @IsNotEmpty()
  location_add: string;

  @IsNotEmpty()
  text: string;

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
