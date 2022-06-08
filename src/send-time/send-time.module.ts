import { Module } from '@nestjs/common';
import { SendTimeController } from './send-time.controller';
import { SendTimeService } from './send-time.service';
import { PostModule } from 'src/post/post.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, PostModule],
  controllers: [SendTimeController],
  providers: [SendTimeService],
})
export class SendTimeModule {}
