import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptionDispersionsController } from './prescription-dispersions.controller';
import { PrescriptionDispersionsService } from './prescription-dispersions.service';

describe('PrescriptionDispersionsController', () => {
  let controller: PrescriptionDispersionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescriptionDispersionsController],
      providers: [PrescriptionDispersionsService],
    }).compile();

    controller = module.get<PrescriptionDispersionsController>(PrescriptionDispersionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
