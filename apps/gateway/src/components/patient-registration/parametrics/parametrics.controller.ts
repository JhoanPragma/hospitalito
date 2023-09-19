import { Body, Controller, Post } from '@nestjs/common';
import { ParametricsService } from './parametrics.service';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { CreateParametricTypeDto } from './dto/create-parametric-type.dto';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateCountryDto } from './dto/create-country.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Parametrics')
@Controller('parametrics')
export class ParametricsController {
  constructor(private readonly parametricsService: ParametricsService) {}

  @Post()
  createParametric(@Body() createParametricDto: CreateParametricDto) {
    return this.parametricsService.createParametric(createParametricDto);
  }

  @Post()
  createParametricType(@Body() createParametricTypeDto: CreateParametricTypeDto) {
    return this.parametricsService.createParametricType(createParametricTypeDto);
  }

  @Post()
  createCity(@Body() createCityDto: CreateCityDto) {
    return this.parametricsService.createCity(createCityDto);
  }

  @Post()
  createDepartment(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.parametricsService.createDepartment(createDepartmentDto);
  }

  @Post()
  createCountry(@Body() createCountryDto: CreateCountryDto) {
    return this.parametricsService.createCountry(createCountryDto);
  }
}
