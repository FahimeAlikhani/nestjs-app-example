import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { UserModule } from 'src/user/user.module';
import { VoiceModule } from 'src/voice/voice.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, VoiceModule],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
