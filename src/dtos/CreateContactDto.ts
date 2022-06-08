/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  mobile_number:string;

  @IsBoolean()
  contact_friend_type:boolean;

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
