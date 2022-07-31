/* eslint-disable prettier/prettier */
import { IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateSeenerDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  story_id: number;

  @ApiProperty()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  create_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  update_date: Date;
}

export class seenerData {
  id: 1;
  story_id: 1;
  user_id: 1;
  create_date: '20211023';
  update_date: '20211023';
}
