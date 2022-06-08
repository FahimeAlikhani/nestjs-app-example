import { Test, TestingModule } from '@nestjs/testing';
import { SendTimeService } from './send-time.service';

describe('SendTimeService', () => {
  let service: SendTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendTimeService],
    }).compile();

    service = module.get<SendTimeService>(SendTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
