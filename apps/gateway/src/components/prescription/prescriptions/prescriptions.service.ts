import { Inject, Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ResponseService } from 'apps/gateway/src/commons/response.service';

@Injectable()
export class PrescriptionsService {
  constructor(@Inject('PRESCRIPTION_MICROSERVICE') private client: ClientProxy,
  private reponseService: ResponseService,
  ) {}

  async create(createPrescriptionDto: CreatePrescriptionDto) {
    return await this.client.send('createPrescription', { ...createPrescriptionDto });
  }

  findAll() {
    return `This action returns all prescriptions`;
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
