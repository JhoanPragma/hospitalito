import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptionDispersionsService } from './prescription-dispersions.service';

describe('PrescriptionDispersionsService', () => {
  let service: PrescriptionDispersionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescriptionDispersionsService],
    }).compile();

    service = module.get<PrescriptionDispersionsService>(PrescriptionDispersionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
