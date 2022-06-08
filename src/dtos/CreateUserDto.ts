/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  picture_add: string;

  @IsString()
  mobile_number: string;

  @IsString()
  user_name: string;

  @IsString()
  description: string;

  @IsString()
  veryfication_code: string;

  @IsString()
  location_country: string;

  @IsString()
  location_city: string;

  @IsNotEmpty()
  ghost_status: boolean;

  @IsNumber()
  rate: number;

  @IsNotEmpty()
  status: boolean;

  @IsNotEmpty()
  create_time: Date;

  @IsNotEmpty()
  update_time: Date;
}
export class userData {
  id: 1;
  first_name: 'ali';
  last_name: 'alizadeh';
  picture_add: 'gjfjfjf';
  mobile_number: '09124035123';
  user_name: 'ali';
  description: 'i am ok';
  veryfication_code: '123456';
  location_country: 'iran';
  location_city: 'tehran';
  ghost_status: false;
  rate: 1;
  status: false;
  create_time: '20211023';
  update_time: '20211023';
}
