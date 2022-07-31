/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mobile_number:string;

  @ApiProperty()
  @IsBoolean()
  contact_friend_type:boolean;

  @ApiProperty()
  @IsBoolean()
  blocked: boolean;
}

export class contactData {
  id: 1;
  user_id: 1;
  mobile_number: '09122121212';
  contact_friend_type: true;
  blocked: true;
}
