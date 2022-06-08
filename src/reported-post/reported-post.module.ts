import { Module } from '@nestjs/common';
import { ReportedPostController } from './reported-post.controller';
import { ReportedPostService } from './reported-post.service';
import { PostModule } from 'src/post/post.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, PostModule],
  controllers: [ReportedPostController],
  providers: [ReportedPostService],
})
export class ReportedPostModule {}
