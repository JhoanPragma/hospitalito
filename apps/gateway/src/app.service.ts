import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('PRESCRIPTION_MICROSERVICE') private client: ClientProxy) {}

  async getHello() {
    const response = await this.client.send('microservice-action', { data: 'SomeData' });
    return response;
  }
}
