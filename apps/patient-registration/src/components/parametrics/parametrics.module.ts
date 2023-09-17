import { Module } from '@nestjs/common';
import { ParametricsService } from './parametrics.service';
import { ParametricsController } from './parametrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametric } from './entities/parametric.entity';
import { ParametricType } from './entities/parametric_type.entity';
import { Country } from './entities/country.entity';
import { Department } from './entities/department.entity';
import { City } from './entities/city.entity';
import { Patient } from '../patients/entities/patient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Parametric, ParametricType, Country, Department, City, Patient])
  ],
  controllers: [ParametricsController],
  providers: [ParametricsService],
})
export class ParametricsModule {}
