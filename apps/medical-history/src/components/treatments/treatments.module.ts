import { Module } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { TreatmentsController } from './treatments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametric } from '../parametrics/entities/parametric.entity';
import { ParametricType } from '../parametrics/entities/parametric_type.entity';
import { Country } from '../parametrics/entities/country.entity';
import { Department } from '../parametrics/entities/department.entity';
import { City } from '../parametrics/entities/city.entity';
import { Patient } from './entities/patient.entity';
import { Treatment } from './entities/treatment.entity';
import { Medicine } from './entities/medicine.entity';
import { Prescription } from './entities/prescription.entity';
import { ResponseService } from '../../commons/response.service';
import { Allergy } from './entities/allergy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Parametric,
      ParametricType,
      Country,
      Department,
      City,
      Patient,
      Treatment,
      Medicine,
      Prescription,
      Allergy
    ])
  ],
  controllers: [TreatmentsController],
  providers: [TreatmentsService, ResponseService],
})
export class TreatmentsModule {}
