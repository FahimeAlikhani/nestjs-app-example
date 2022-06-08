import { Test, TestingModule } from '@nestjs/testing';
import { SeenerService } from './seener.service';

describe('SeenerService', () => {
  let service: SeenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeenerService],
    }).compile();

    service = module.get<SeenerService>(SeenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
