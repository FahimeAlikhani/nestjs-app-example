/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  id: number;

  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  tracking_code: string;

  @IsNotEmpty()
  payment_status: boolean;

  @IsNotEmpty()
  create_date: Date;
}
export class paymentData {
  id: 1;
  user_id: 1;
  amount: 'location_add';
  tracking_code: '1234567891234';
  payment_status: true;
  create_date: '20211023';
}
