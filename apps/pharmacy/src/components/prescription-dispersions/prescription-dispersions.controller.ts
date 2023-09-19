import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrescriptionDispersionsService } from './prescription-dispersions.service';
import { CreatePrescriptionDispersionDto } from './dto/create-prescription-dispersion.dto';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';

@Controller()
export class PrescriptionDispersionsController {
  constructor(private readonly prescriptionDispersionsService: PrescriptionDispersionsService) {}

  @MessagePattern('createPrescriptionDispersion')
  create(@Payload() createPrescriptionDispersionDto: CreatePrescriptionDispersionDto) {
    return this.prescriptionDispersionsService.create(createPrescriptionDispersionDto);
  }

  @MessagePattern('createPharmacy')
  createPharmacy(@Payload() createPharmacy: CreatePharmacyDto) {
    return this.prescriptionDispersionsService.createPharmacy(createPharmacy);
  }
}
