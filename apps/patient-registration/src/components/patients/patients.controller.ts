import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

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

  @MessagePattern('findOnePatient')
  findOne(@Payload() id: number) {
    return this.patientsService.findOne(id);
  }

  @MessagePattern('updatePatient')
  update(@Payload() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(updatePatientDto.id, updatePatientDto);
  }

  @MessagePattern('removePatient')
  remove(@Payload() id: number) {
    return this.patientsService.remove(id);
  }
}
