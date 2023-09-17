import { Module } from '@nestjs/common';
import { ParametricsService } from './parametrics.service';
import { ParametricsController } from './parametrics.controller';
import { PatientRegistrationMicroservice } from '../../microservices/patient-registration';

@Module({
  imports: [
    PatientRegistrationMicroservice,
  ],
  controllers: [ParametricsController],
  providers: [ParametricsService],
})
export class ParametricsModule {}
