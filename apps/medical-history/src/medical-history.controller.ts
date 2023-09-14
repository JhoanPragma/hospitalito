import { Controller, Get } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';

@Controller()
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @Get()
  getHello(): string {
    return this.medicalHistoryService.getHello();
  }
}
