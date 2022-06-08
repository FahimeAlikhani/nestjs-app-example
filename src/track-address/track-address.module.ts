import { Module } from '@nestjs/common';
import { TrackAddressController } from './track-address.controller';
import { TrackAddressService } from './track-address.service';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [TrackAddressController],
  providers: [TrackAddressService],
})
export class TrackAddressModule {}
