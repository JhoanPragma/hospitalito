import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrescriptionMicroservice } from './components/microservices/prescription';
import { PharmacyMicroservice } from './components/microservices/pharmacy';
import { PatientRegistrationMicroservice } from './components/microservices/patient-registration';
import { MedicalHistoryMicroservice } from './components/microservices/medical-history';

@Module({
  imports: [
    PrescriptionMicroservice,
    PharmacyMicroservice,
    PatientRegistrationMicroservice,
    MedicalHistoryMicroservice,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
