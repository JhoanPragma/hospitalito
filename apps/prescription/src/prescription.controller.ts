import { Controller, Get } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @MessagePattern('microservice-action')
  getHello() {
    return this.prescriptionService.getHello();
  }
}
