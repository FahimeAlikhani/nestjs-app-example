/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateFollowsDto {
  @ApiProperty()
  @IsNotEmpty()
  follower_id: number;

  @ApiProperty()
  @IsNotEmpty()
  following_id: number;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  update_date: Date;
}

export class followsData {
  follower_id: 1;
  following_id: 1;
  create_date: '20211023';
  update_date: '20211023';
}
