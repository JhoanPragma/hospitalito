import { Module } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsController } from './prescriptions.controller';
import { PrescriptionMicroservice } from '../../microservices/prescription';
import { ResponseService } from 'apps/gateway/src/commons/response.service';

@Module({
  imports: [
    PrescriptionMicroservice,
  ],
  controllers: [PrescriptionsController],
  providers: [PrescriptionsService, ResponseService],
})
export class PrescriptionsModule {}
