import { Test, TestingModule } from '@nestjs/testing';
import { SeenerController } from './seener.controller';

describe('SeenerController', () => {
  let controller: SeenerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeenerController],
    }).compile();

    controller = module.get<SeenerController>(SeenerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
