import { Inject, Injectable } from '@nestjs/common';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { UpdateParametricDto } from './dto/update-parametric.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ParametricsService {
  constructor(@Inject('PATIENT_REGISTRATION_MICROSERVICE') private client: ClientProxy) {}

  async findAll() {
    const response = await this.client.send('findAllParametrics', { data: '' });
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} parametric`;
  }
}
