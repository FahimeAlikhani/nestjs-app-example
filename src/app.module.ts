import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoryController } from './story/story.controller';
import { StoryService } from './story/story.service';
import { StoryModule } from './story/story.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DirectController } from './direct/direct.controller';
import { DirectService } from './direct/direct.service';
import { DirectModule } from './direct/direct.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';
import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';
import { LocationModule } from './location/location.module';
import { VoiceController } from './voice/voice.controller';
import { VoiceService } from './voice/voice.service';
import { VoiceModule } from './voice/voice.module';
import { TrackAddressController } from './track-address/track-address.controller';
import { TrackAddressService } from './track-address/track-address.service';
import { TrackAddressModule } from './track-address/track-address.module';
import { FollowsController } from './follows/follows.controller';
import { FollowsService } from './follows/follows.service';
import { FollowsModule } from './follows/follows.module';
import { TagController } from './tag/tag.controller';
import { TagService } from './tag/tag.service';
import { TagModule } from './tag/tag.module';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { SendTimeController } from './send-time/send-time.controller';
import { SendTimeService } from './send-time/send-time.service';
import { SendTimeModule } from './send-time/send-time.module';
import { ReportedPostController } from './reported-post/reported-post.controller';
import { ReportedPostService } from './reported-post/reported-post.service';
import { ReportedPostModule } from './reported-post/reported-post.module';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { CommentModule } from './comment/comment.module';
import { SocialController } from './social/social.controller';
import { SocialService } from './social/social.service';
import { SocialModule } from './social/social.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { SeenerModule } from './seener/seener.module';
import { SeenerController } from './seener/seener.controller';
import { SeenerService } from './seener/seener.service';

@Module({
  imports: [
    StoryModule,
    DirectModule,
    PaymentModule,
    LocationModule,
    VoiceModule,
    TrackAddressModule,
    FollowsModule,
    TagModule,
    ContactModule,
    SendTimeModule,
    ReportedPostModule,
    CommentModule,
    SocialModule,
    SeenerModule,
    PrismaModule,
    UserModule,
    PostModule,
  ],
  controllers: [
    AppController,
    StoryController,
    DirectController,
    PaymentController,
    LocationController,
    VoiceController,
    TrackAddressController,
    FollowsController,
    TagController,
    ContactController,
    SendTimeController,
    ReportedPostController,
    CommentController,
    SocialController,
    SeenerController,
    UserController,
    PostController,
  ],
  providers: [
    AppService,
    StoryService,
    DirectService,
    PaymentService,
    LocationService,
    VoiceService,
    TrackAddressService,
    FollowsService,
    TagService,
    ContactService,
    SendTimeService,
    ReportedPostService,
    CommentService,
    SocialService,
    PrismaService,
    SeenerService,
    UserService,
    PostService,
  ],
})
export class AppModule {}
