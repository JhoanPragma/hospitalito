import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';

@Controller()
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @MessagePattern('createMedicine')
  create(@Payload() createMedicineDto: CreateMedicineDto) {
    return this.medicinesService.create(createMedicineDto);
  }
}
