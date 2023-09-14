import { Test, TestingModule } from '@nestjs/testing';
import { MedicalHistoryController } from './medical-history.controller';
import { MedicalHistoryService } from './medical-history.service';

describe('MedicalHistoryController', () => {
  let medicalHistoryController: MedicalHistoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MedicalHistoryController],
      providers: [MedicalHistoryService],
    }).compile();

    medicalHistoryController = app.get<MedicalHistoryController>(MedicalHistoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(medicalHistoryController.getHello()).toBe('Hello World!');
    });
  });
});
