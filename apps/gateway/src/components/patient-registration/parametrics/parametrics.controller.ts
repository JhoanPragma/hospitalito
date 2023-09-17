import { Controller, Get, Param } from '@nestjs/common';
import { ParametricsService } from './parametrics.service';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { UpdateParametricDto } from './dto/update-parametric.dto';

@Controller('parametrics')
export class ParametricsController {
  constructor(private readonly parametricsService: ParametricsService) {}

  @Get()
  findAll() {
    return this.parametricsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametricsService.findOne(+id);
  }
}
