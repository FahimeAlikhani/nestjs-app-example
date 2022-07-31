/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePaymentDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  tracking_code: string;

  @ApiProperty()
  @IsNotEmpty()
  payment_status: boolean;

  @ApiProperty()
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
