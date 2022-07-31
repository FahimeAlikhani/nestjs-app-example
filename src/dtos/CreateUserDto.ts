/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsString()
  picture_add: string;

  @ApiProperty()
  @IsString()
  mobile_number: string;

  @ApiProperty()
  @IsString()
  user_name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  veryfication_code: string;

  @ApiProperty()
  @IsString()
  location_country: string;

  @ApiProperty()
  @IsString()
  location_city: string;

  @ApiProperty()
  @IsNotEmpty()
  ghost_status: boolean;

  @ApiProperty()
  @IsNumber()
  rate: number;

  @ApiProperty()
  @IsNotEmpty()
  status: boolean;

  @ApiProperty()
  @IsNotEmpty()
  create_time: Date;

  @ApiProperty()
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
