import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parametric } from './entities/parametric.entity';
import { Repository } from 'typeorm';
import { ParametricType } from './entities/parametric_type.entity';
import { CreateParametricTypeDto } from './dto/create-parametric-type.dto';
import { CreateParametricDto } from './dto/create-parametric.dto';
import { City } from './entities/city.entity';
import { Department } from './entities/department.entity';
import { Country } from './entities/country.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class ParametricsService {
  constructor(
    @InjectRepository(Parametric)
    private readonly parametricRepository: Repository<Parametric>,
    @InjectRepository(ParametricType)
    private readonly parametricTypeRepository: Repository<ParametricType>,
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}
  
  async createParametricType(createParametricTypeDto: CreateParametricTypeDto) {
    return await this.parametricTypeRepository.save(createParametricTypeDto);
  }

  async createParametric(createParametricDto: CreateParametricDto) {
    return await this.parametricRepository.save(createParametricDto);
  }

  async createCity(createCityDto: CreateCityDto) {
    const cityData = this.cityRepository.create({
      ...createCityDto,
      department: await this.departmentRepository.findOne({ where: { id: createCityDto.department } }),
    });

    return await this.cityRepository.save(cityData);
  }

  async createDepartment(createDepartmentDto: CreateDepartmentDto) {
    const departmentData = this.departmentRepository.create({
      ...createDepartmentDto,
      country: await this.countryRepository.findOne({ where: { id: createDepartmentDto.country } }),
    });

    return await this.cityRepository.save(departmentData);
  }

  async createCountry(createCountryDto: CreateCountryDto) {
    return await this.countryRepository.save(createCountryDto);
  }
}
