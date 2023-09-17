import { Module } from '@nestjs/common';
import { ParametricsModule } from './parametrics/parametrics.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    ParametricsModule,
    PatientModule,
  ]
})
export class PatientRegistrationModule {}
