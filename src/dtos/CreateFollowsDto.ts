/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateFollowsDto {
  @IsNotEmpty()
  follower_id: number;

  @IsNotEmpty()
  following_id: number;

  @IsNotEmpty()
  create_date: Date;

  @IsNotEmpty()
  update_date: Date;
}

export class followsData {
  follower_id: 1;
  following_id: 1;
  create_date: '20211023';
  update_date: '20211023';
}
