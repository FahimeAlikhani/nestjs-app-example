/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class ReportedPostDto {
  @IsNotEmpty()
  id: number;
  
  @IsNotEmpty()
  post_id: number;

  @IsNotEmpty()
  status: boolean;

  @IsNotEmpty()
  create_date: Date;
}
export class reportedPostData {
  id: 1;
  post_id: 1;
  status: true;
  create_date: '20211023';
}
