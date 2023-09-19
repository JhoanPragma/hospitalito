import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TreatmentsService } from './treatments.service';
import { CreateTreatmentDto } from './dto/create-treatment.dto';

@Controller()
export class TreatmentsController {
  constructor(private readonly treatmentsService: TreatmentsService,
    ) {}

  @MessagePattern('createTreatment')
  create(@Payload() createTreatmentDto: CreateTreatmentDto) {
    return this.treatmentsService.create(createTreatmentDto);
  }

  @MessagePattern('findClinicHistory')
  findClinicHistory(@Payload() patientId: number) {
    return this.treatmentsService.clinicHistory(patientId);
  }
}
