import { Injectable } from '@nestjs/common';

@Injectable()
export class ParametricsService {
  findAll() {
    return `This action returns all parametrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parametric`;
  }
}
