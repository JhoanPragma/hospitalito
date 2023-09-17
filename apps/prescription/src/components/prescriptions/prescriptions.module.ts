import { Module } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsController } from './prescriptions.controller';
import { Allergy } from './entities/allergy.entity';
import { Prescription } from './entities/prescription.entity';
import { Medicine } from './entities/medicine.entity';
import { Patient } from './entities/patient.entity';
import { City } from '../parametrics/entities/city.entity';
import { Department } from '../parametrics/entities/department.entity';
import { Country } from '../parametrics/entities/country.entity';
import { ParametricType } from '../parametrics/entities/parametric_type.entity';
import { Parametric } from '../parametrics/entities/parametric.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treatment } from './entities/treatment.entity';
import { ResponseService } from '../../commons/response.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Parametric,
      ParametricType,
      Country,
      Department,
      City,
      Patient,
      Medicine,
      Prescription,
      Treatment,
      Allergy,
    ])
  ],
  controllers: [PrescriptionsController],
  providers: [PrescriptionsService, ResponseService],
})
export class PrescriptionsModule {}
