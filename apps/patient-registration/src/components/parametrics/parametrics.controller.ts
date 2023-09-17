import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParametricsService } from './parametrics.service';

@Controller()
export class ParametricsController {
  constructor(private readonly parametricsService: ParametricsService) {}

  @MessagePattern('findAllParametrics')
  findAll() {
    return this.parametricsService.findAll();
  }

  @MessagePattern('findOneParametric')
  findOne(@Payload() id: number) {
    return this.parametricsService.findOne(id);
  }

}
