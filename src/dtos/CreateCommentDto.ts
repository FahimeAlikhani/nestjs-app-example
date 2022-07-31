/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @IsNotEmpty()
  @ApiProperty()
  id: number;
  
  @IsNotEmpty()
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  post_id: number;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  text: string;

  @IsNotEmpty()
  @ApiProperty()
  create_date: Date;
}

export class commentData {
  id: 1;
  user_id: 1;
  post_id: 1;
  text: 'title';
  create_date: '20211023';
}
