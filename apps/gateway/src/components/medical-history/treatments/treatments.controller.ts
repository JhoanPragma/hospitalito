import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Treatment')
@Controller('treatments')
export class TreatmentsController {
  constructor(private readonly treatmentsService: TreatmentsService) {}

  @Post()
  create(@Body() createTreatmentDto: CreateTreatmentDto) {
    return this.treatmentsService.create(createTreatmentDto);
  }

  @Get('find-clinic-history/:id')
  findClinicHistory(@Param('id') id: number) {
    return this.treatmentsService.findHistoryClinic(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatmentsService.findOne(+id);
  }
}
