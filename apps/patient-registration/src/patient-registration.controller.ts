import { Controller, Get } from '@nestjs/common';
import { PatientRegistrationService } from './patient-registration.service';

@Controller()
export class PatientRegistrationController {
  constructor(private readonly patientRegistrationService: PatientRegistrationService) {}

  @Get()
  getHello(): string {
    return this.patientRegistrationService.getHello();
  }
}
