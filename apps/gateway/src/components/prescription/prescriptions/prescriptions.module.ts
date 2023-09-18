import { Module } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsController } from './prescriptions.controller';
import { PrescriptionMicroservice } from '../../microservices/prescription';
import { ResponseService } from 'apps/gateway/src/commons/response.service';
import { PharmacyMicroservice } from '../../microservices/pharmacy';

@Module({
  imports: [
    PrescriptionMicroservice,
    PharmacyMicroservice
  ],
  controllers: [PrescriptionsController],
  providers: [PrescriptionsService, ResponseService],
})
export class PrescriptionsModule {}
