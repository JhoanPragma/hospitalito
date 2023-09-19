import { Inject, Injectable } from '@nestjs/common';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateParametricTypeDto } from './dto/create-parametric-type.dto';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class ParametricsService {
  constructor(@Inject('PATIENT_REGISTRATION_MICROSERVICE') private client: ClientProxy) {}

  async createParametric(createParametricDto: CreateParametricDto) {
    return await this.client.send('createParametric', { data: createParametricDto });
  }

  async createParametricType(createParametricTypeDto: CreateParametricTypeDto) {
    return await this.client.send('createParametricT', { data: createParametricTypeDto });
  }

  async createCity(createCityDto: CreateCityDto) {
    return await this.client.send('createCity', { data: createCityDto });
  }

  async createDepartment(createDepartmentDto: CreateDepartmentDto) {
    return await this.client.send('createDepartment', { data: createDepartmentDto });
  }

  async createCountry(createCountryDto: CreateCountryDto) {
    return await this.client.send('createCountry', { data: createCountryDto });
  }
}
