import { Injectable } from '@nestjs/common';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { UpdateParametricDto } from './dto/update-parametric.dto';

@Injectable()
export class ParametricsService {
  create(createParametricDto: CreateParametricDto) {
    return 'This action adds a new parametric';
  }

  findAll() {
    return `This action returns all parametrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parametric`;
  }

  update(id: number, updateParametricDto: UpdateParametricDto) {
    return `This action updates a #${id} parametric`;
  }

  remove(id: number) {
    return `This action removes a #${id} parametric`;
  }
}
