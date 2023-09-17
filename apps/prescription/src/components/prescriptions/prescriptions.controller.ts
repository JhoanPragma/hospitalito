import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrescriptionsService } from './prescriptions.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';

@Controller()
export class PrescriptionsController {
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @MessagePattern('createPrescription')
  create(@Payload() createPrescriptionDto: CreatePrescriptionDto) {
    return this.prescriptionsService.create(createPrescriptionDto);
  }

  @MessagePattern('findAllPrescriptions')
  findAll() {
    return this.prescriptionsService.findAll();
  }

  @MessagePattern('findOnePrescription')
  findOne(@Payload() id: number) {
    return this.prescriptionsService.findOne(id);
  }

  @MessagePattern('updatePrescription')
  update(@Payload() updatePrescriptionDto: UpdatePrescriptionDto) {
    return this.prescriptionsService.update(updatePrescriptionDto.id, updatePrescriptionDto);
  }

  @MessagePattern('removePrescription')
  remove(@Payload() id: number) {
    return this.prescriptionsService.remove(id);
  }
}
