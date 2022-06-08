/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  caption: string;

  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  picture_add: string;

  @IsNotEmpty()
  video_add: string;

  @IsNotEmpty()
  location_country: string;

  @IsNotEmpty()
  location_city: string;

  @IsNotEmpty()
  rate: number;

  @IsNotEmpty()
  create_date: Date;

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
