import { Test, TestingModule } from '@nestjs/testing';
import { ParametricsController } from './parametrics.controller';
import { ParametricsService } from './parametrics.service';

describe('ParametricsController', () => {
  let controller: ParametricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParametricsController],
      providers: [ParametricsService],
    }).compile();

    controller = module.get<ParametricsController>(ParametricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
