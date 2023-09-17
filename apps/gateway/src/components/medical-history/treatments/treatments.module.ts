import { Module } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { TreatmentsController } from './treatments.controller';
import { MedicalHistoryMicroservice } from '../../microservices/medical-history';
import { ResponseService } from 'apps/gateway/src/commons/response.service';

@Module({
  imports: [
    MedicalHistoryMicroservice,  
  ],
  controllers: [TreatmentsController],
  providers: [TreatmentsService, ResponseService],
})
export class TreatmentsModule {}
