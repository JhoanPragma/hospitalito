import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { CreatePrescriptionDispersionDto } from './dto/create-prescription-dispersion.dto';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prescriptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrescriptionDto: UpdatePrescriptionDto) {
    return this.prescriptionsService.update(+id, updatePrescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prescriptionsService.remove(+id);
  }
}
