/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  id: number;
  
  @IsNotEmpty()
  user_id: number;
  post_id: number;
  
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  create_date: Date;
}

export class commentData {
  id: 1;
  user_id: 1;
  post_id: 1;
  text: 'title';
  create_date: '20211023';
}
