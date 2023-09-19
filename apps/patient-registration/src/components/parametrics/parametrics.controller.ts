import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParametricsService } from './parametrics.service';
import { CreateParametricTypeDto } from './dto/create-parametric-type.dto';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateCountryDto } from './dto/create-country.dto';

@Controller()
export class ParametricsController {
  constructor(private readonly parametricsService: ParametricsService) {}

  @MessagePattern('createParametricType')
  createParametricType(@Payload() createParametricTypeDto: CreateParametricTypeDto) {
    return this.parametricsService.createParametricType(createParametricTypeDto);
  }

  @MessagePattern('createParametric')
  createParametric(@Payload() createParametricDto: CreateParametricDto) {
    return this.parametricsService.createParametric(createParametricDto);
  }

  @MessagePattern('createCity')
  createCity(@Payload() createCityDto: CreateCityDto) {
    return this.parametricsService.createCity(createCityDto);
  }

  @MessagePattern('createDepartment')
  createDepartment(@Payload() createDepartmentDto: CreateDepartmentDto) {
    return this.parametricsService.createDepartment(createDepartmentDto);
  }

  @MessagePattern('createCountry')
  createCountry(@Payload() createCountryDto: CreateCountryDto) {
    return this.parametricsService.createCountry(createCountryDto);
  }
}
