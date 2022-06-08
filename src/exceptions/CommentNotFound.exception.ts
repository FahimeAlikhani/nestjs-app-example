import { NotFoundException } from '@nestjs/common';

export class CommentNotFoundException extends NotFoundException {
  constructor(Id: number) {
    super(`Comment with id ${Id} not found`);
  }
}
