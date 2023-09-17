import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { City } from '../parametrics/entities/city.entity';
import { Parametric } from '../parametrics/entities/parametric.entity';
import { ResponseService } from '../../commons/response.service';
import { Allergy } from './entities/allergy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patient, City, Parametric, Allergy])
  ],
  controllers: [PatientsController],
  providers: [PatientsService, ResponseService],
})
export class PatientsModule {}
