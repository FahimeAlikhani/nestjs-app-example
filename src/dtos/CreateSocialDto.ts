/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateSocialDto {
  @IsNotEmpty()
  id: number;
  
  @IsNotEmpty()
  user_id: number;

  twitter: string;
  facebook: string;
  instagram: string;
  telegram: string;

  @IsNotEmpty()
  create_time:Date;

  @IsNotEmpty()
  update_time:Date;
}
export class socialData {
  id: 1;
  user_id: 1;
  twitter: 'https://twitter.com/';
  facebook: 'https://facebook.com/';
  instagram: 'https://instagram.com/';
  telegram: 'https:// telegram.com/';
  create_date: '20211023';
  update_date: '20211023';
}
