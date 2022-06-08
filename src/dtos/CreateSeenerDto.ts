/* eslint-disable prettier/prettier */
import { IsNotEmpty} from 'class-validator';

export class CreateSeenerDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  story_id: number;

  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  create_date: Date;

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
