import { Module } from '@nestjs/common';
import { PrescriptionDispersionsService } from './prescription-dispersions.service';
import { PrescriptionDispersionsController } from './prescription-dispersions.controller';
import { ResponseService } from '../../commons/response.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametric } from '../parametrics/entities/parametric.entity';
import { ParametricType } from '../parametrics/entities/parametric_type.entity';
import { Country } from '../parametrics/entities/country.entity';
import { Department } from '../parametrics/entities/department.entity';
import { City } from '../parametrics/entities/city.entity';
import { Patient } from './entities/patient.entity';
import { Medicine } from './entities/medicine.entity';
import { Prescription } from './entities/prescription.entity';
import { Treatment } from './entities/treatment.entity';
import { Allergy } from './entities/allergy.entity';
import { Pharmacy } from './entities/pharmacy.entity';
import { PrescriptionDispercion } from './entities/prescriptionDispersion.entity';
import { SocketGateway } from './sockets.gateway';

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
      Pharmacy,
      PrescriptionDispercion
    ])
  ],
  controllers: [PrescriptionDispersionsController],
  providers: [PrescriptionDispersionsService, ResponseService, SocketGateway],
})
export class PrescriptionDispersionsModule {}
