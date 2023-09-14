import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParametricsService } from './parametrics.service';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { UpdateParametricDto } from './dto/update-parametric.dto';

@Controller()
export class ParametricsController {
  constructor(private readonly parametricsService: ParametricsService) {}

  @MessagePattern('createParametric')
  create(@Payload() createParametricDto: CreateParametricDto) {
    return this.parametricsService.create(createParametricDto);
  }

  @MessagePattern('findAllParametrics')
  findAll() {
    return this.parametricsService.findAll();
  }

  @MessagePattern('findOneParametric')
  findOne(@Payload() id: number) {
    return this.parametricsService.findOne(id);
  }

  @MessagePattern('updateParametric')
  update(@Payload() updateParametricDto: UpdateParametricDto) {
    return this.parametricsService.update(updateParametricDto.id, updateParametricDto);
  }

  @MessagePattern('removeParametric')
  remove(@Payload() id: number) {
    return this.parametricsService.remove(id);
  }
}
