import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrescriptionMicroservice } from './components/microservices/prescription';
import { PharmacyMicroservice } from './components/microservices/pharmacy';
import { MedicalHistoryMicroservice } from './components/microservices/medical-history';
import { PatientRegistrationModule } from './components/patient-registration/patient-registration.module';
import { TreatmentsModule } from './components/medical-history/treatments/treatments.module';
import { PrescriptionsModule } from './components/prescription/prescriptions/prescriptions.module';


@Module({
  imports: [
    PrescriptionMicroservice,
    PharmacyMicroservice,
    MedicalHistoryMicroservice,
    PatientRegistrationModule,
    TreatmentsModule,
    PrescriptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
