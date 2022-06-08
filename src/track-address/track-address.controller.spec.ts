import { Test, TestingModule } from '@nestjs/testing';
import { TrackAddressController } from './track-address.controller';

describe('TrackAddressController', () => {
  let controller: TrackAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackAddressController],
    }).compile();

    controller = module.get<TrackAddressController>(TrackAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
