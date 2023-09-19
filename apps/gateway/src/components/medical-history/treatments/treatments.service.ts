import { Inject, Injectable } from '@nestjs/common';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TreatmentsService {
  constructor(@Inject('MEDICAL_HISTORY_MICROSERVICE') private client: ClientProxy,
  ) {}

  async create(createTreatmentDto: CreateTreatmentDto) {
    return await this.client.send('createTreatment', { ...createTreatmentDto });
  }

  async findOne(id: number) {
    return await this.client.send('findOnePatient', id);
  }

  async findHistoryClinic(id: number) {
    return await this.client.send('findClinicHistory', id);
  }
}
