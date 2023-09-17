import { Inject, Injectable } from '@nestjs/common';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { ResponseService } from 'apps/gateway/src/commons/response.service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TreatmentsService {
  constructor(@Inject('MEDICAL_HISTORY_MICROSERVICE') private client: ClientProxy,
  private reponseService: ResponseService,
  ) {}

  async create(createTreatmentDto: CreateTreatmentDto) {
    return await this.client.send('createTreatment', { ...createTreatmentDto });
  }

  findAll() {
    return `This action returns all treatments`;
  }

  async findOne(id: number) {
    return await this.client.send('findOnePatient', id);
  }

  async findHistoryClinic(id: number) {
    return await this.client.send('findClinicHistory', id);
  }

  update(id: number, updateTreatmentDto: UpdateTreatmentDto) {
    return `This action updates a #${id} treatment`;
  }

  remove(id: number) {
    return `This action removes a #${id} treatment`;
  }
}
