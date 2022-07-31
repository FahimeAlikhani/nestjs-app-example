/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ReportedPostDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
  
  @ApiProperty()
  @IsNotEmpty()
  post_id: number;

  @ApiProperty()
  @IsNotEmpty()
  status: boolean;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;
}
export class reportedPostData {
  id: 1;
  post_id: 1;
  status: true;
  create_date: '20211023';
}
