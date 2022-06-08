import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StoryModule } from 'src/story/story.module';
import { UserModule } from 'src/user/user.module';
import { SeenerController } from './seener.controller';
import { SeenerService } from './seener.service';

@Module({
  imports: [PrismaModule, StoryModule, UserModule],
  controllers: [SeenerController],
  providers: [SeenerService],
})
export class SeenerModule {}
