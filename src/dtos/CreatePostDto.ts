/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  caption: string;

  @ApiProperty()
  @IsNotEmpty()
  text: string;

  @ApiProperty()
  @IsNotEmpty()
  picture_add: string;

  @ApiProperty()
  @IsNotEmpty()
  video_add: string;

  @ApiProperty()
  @IsNotEmpty()
  location_country: string;

  @ApiProperty()
  @IsNotEmpty()
  location_city: string;

  @ApiProperty()
  @IsNotEmpty()
  rate: number;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  update_date: Date;
}
export class postData {
  id: 1;
  user_id: 1;
  caption: 'string';
  text: 'hello';
  picture_add: 'http://jgkufkl2.com';
  video_add: 'http://jgkufkl2.com';
  location_country: 'iran';
  location_city: 'tehran';
  rate: 1;
  create_date: '20211023';
  update_date: '20211023';
}
