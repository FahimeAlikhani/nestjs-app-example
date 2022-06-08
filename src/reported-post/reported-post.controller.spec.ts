import { Test, TestingModule } from '@nestjs/testing';
import { ReportedPostController } from './reported-post.controller';

describe('ReportedPostController', () => {
  let controller: ReportedPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportedPostController],
    }).compile();

    controller = module.get<ReportedPostController>(ReportedPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
