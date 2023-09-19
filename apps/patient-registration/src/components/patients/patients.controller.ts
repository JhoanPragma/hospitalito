import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller()
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @MessagePattern('createPatient')
  create(@Payload() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @MessagePattern('findAllPatients')
  findAll() {
    return this.patientsService.findAll();
  }
}
