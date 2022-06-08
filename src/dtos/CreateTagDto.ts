/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTagDto {
  @IsNumber()
  id: number;

  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  create_date: Date;
}
export class tagData {
  id: 1;
  user_id: 1;
  create_date: '20211023';
}
