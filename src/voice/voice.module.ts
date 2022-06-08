import { Module, forwardRef } from '@nestjs/common';
import { VoiceController } from './voice.controller';
import { VoiceService } from './voice.service';
import { LocationModule } from 'src/location/location.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, VoiceModule, forwardRef(() => LocationModule)],
  controllers: [VoiceController],
  providers: [VoiceService],
})
export class VoiceModule {}
