import { Test, TestingModule } from '@nestjs/testing';
import { SendTimeController } from './send-time.controller';

describe('SendTimeController', () => {
  let controller: SendTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendTimeController],
    }).compile();

    controller = module.get<SendTimeController>(SendTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
