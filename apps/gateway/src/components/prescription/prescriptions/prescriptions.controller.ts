import { Controller, Post, Body } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { CreatePrescriptionDispersionDto } from './dto/create-prescription-dispersion.dto';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('prescription')
@Controller('prescriptions')
export class PrescriptionsController {
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @Post()
  create(@Body() createPrescriptionDto: CreatePrescriptionDto) {
    return this.prescriptionsService.create(createPrescriptionDto);
  }

  @Post('dispersion')
  createDispersion(@Body() createPrescriptionDispersionDto: CreatePrescriptionDispersionDto) {
    return this.prescriptionsService.prescriptionDispersion(createPrescriptionDispersionDto);
  }

  @Post('create-pharmacy')
  createPharmacy(@Body() createPharmacyDto: CreatePharmacyDto) {
    return this.prescriptionsService.createPharmacy(createPharmacyDto);
  }

  @Post('create-medicine')
  createMedicine(@Body() createMedicineDto: CreateMedicineDto) {
    return this.prescriptionsService.createMedicine(createMedicineDto);
  }
}
