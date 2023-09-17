import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { PatientRegistrationMicroservice } from '../../microservices/patient-registration';
import { ResponseService } from 'apps/gateway/src/commons/response.service';

@Module({
  imports: [
    PatientRegistrationMicroservice,
  ],
  controllers: [PatientController],
  providers: [PatientService, ResponseService],
})
export class PatientModule {}
