import { Inject, Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ResponseService } from 'apps/gateway/src/commons/response.service';
import { CreatePrescriptionDispersionDto } from './dto/create-prescription-dispersion.dto';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';

@Injectable()
export class PrescriptionsService {
  constructor(@Inject('PRESCRIPTION_MICROSERVICE') private client: ClientProxy,
  @Inject('PHARMACY_MICROSERVICE') private client2: ClientProxy,
  private reponseService: ResponseService,
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

  findOne(id: number) {
    return `This action returns a #${id} prescription`;
  }

  update(id: number, updatePrescriptionDto: UpdatePrescriptionDto) {
    return `This action updates a #${id} prescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescription`;
  }
}
