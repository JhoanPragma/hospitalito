import { Inject, Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePrescriptionDispersionDto } from './dto/create-prescription-dispersion.dto';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { CreateMedicineDto } from './dto/create-medicine.dto';

@Injectable()
export class PrescriptionsService {
  constructor(@Inject('PRESCRIPTION_MICROSERVICE') private client: ClientProxy,
  @Inject('PHARMACY_MICROSERVICE') private client2: ClientProxy,
  ) {}

  async create(createPrescriptionDto: CreatePrescriptionDto) {
    return await this.client.send('createPrescription', { ...createPrescriptionDto });
  }

  async prescriptionDispersion(createPrescriptionDispersionDto: CreatePrescriptionDispersionDto) {
    return await this.client2.send('createPrescriptionDispersion', { ...createPrescriptionDispersionDto });
  }

  async createPharmacy(createPharmacyDto: CreatePharmacyDto) {
    return await this.client2.send('createPharmacy', { ...createPharmacyDto });
  }

  async createMedicine(createMedicineDto: CreateMedicineDto) {
    return await this.client2.send('createMedicine', { ...createMedicineDto });
  }
}
