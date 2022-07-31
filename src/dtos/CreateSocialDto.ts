/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateSocialDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
  
  @ApiProperty()
  @IsNotEmpty()
  user_id: number;
  
  @ApiProperty()
  twitter: string;

  @ApiProperty()
  facebook: string;

  @ApiProperty()
  instagram: string;

  @ApiProperty()
  telegram: string;

  @ApiProperty()
  @IsNotEmpty()
  create_time:Date;

  @ApiProperty()
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
