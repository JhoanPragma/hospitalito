import { Test, TestingModule } from '@nestjs/testing';
import { ParametricsService } from './parametrics.service';

describe('ParametricsService', () => {
  let service: ParametricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParametricsService],
    }).compile();

    service = module.get<ParametricsService>(ParametricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
