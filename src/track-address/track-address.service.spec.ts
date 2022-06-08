import { Test, TestingModule } from '@nestjs/testing';
import { TrackAddressService } from './track-address.service';

describe('TrackAddressService', () => {
  let service: TrackAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackAddressService],
    }).compile();

    service = module.get<TrackAddressService>(TrackAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
