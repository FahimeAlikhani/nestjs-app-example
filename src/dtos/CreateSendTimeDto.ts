/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateSendTimeDto {
  @IsNotEmpty()
  id: number;
  
  @IsNotEmpty()
  post_id: number;

  @IsNotEmpty()
  create_date: Date;
}
export class sendTimeData {
  id: 1;
  post_id: 1;
  create_date: '20211023';
}
