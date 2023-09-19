import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from '../prescription-dispersions/entities/medicine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
  ){}

  async create(createMedicineDto: CreateMedicineDto) {
    return await this.medicineRepository.create(createMedicineDto);
  }
}
