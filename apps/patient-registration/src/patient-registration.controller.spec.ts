import { Test, TestingModule } from '@nestjs/testing';
import { PatientRegistrationController } from './patient-registration.controller';
import { PatientRegistrationService } from './patient-registration.service';

describe('PatientRegistrationController', () => {
  let patientRegistrationController: PatientRegistrationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PatientRegistrationController],
      providers: [PatientRegistrationService],
    }).compile();

    patientRegistrationController = app.get<PatientRegistrationController>(PatientRegistrationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(patientRegistrationController.getHello()).toBe('Hello World!');
    });
  });
});
