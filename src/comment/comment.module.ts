import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, PostModule, UserModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
