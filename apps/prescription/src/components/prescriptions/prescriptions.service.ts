import { Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prescription } from './entities/prescription.entity';
import { Repository } from 'typeorm';
import { Treatment } from './entities/treatment.entity';
import { ResponseService } from '../../commons/response.service';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class PrescriptionsService {
  constructor(
    @InjectRepository(Prescription)
    private readonly prescriptionRepository: Repository<Prescription>,
    @InjectRepository(Treatment)
    private readonly treatmentRepository: Repository<Treatment>,
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
    private reponseService: ResponseService,
    ) {}
  
  async create(createPrescriptionDto: CreatePrescriptionDto) {
    const treatmentData = await this.treatmentRepository.findOne({
      where: {
        id: createPrescriptionDto.treatment,
      },
    });

    if (!treatmentData) {
      return this.reponseService.responseError('Treatment Not Found', 404);
    }
  
    const prescription = this.prescriptionRepository.create({
      ...createPrescriptionDto,
      treatment: treatmentData,
      medicines: null
    });

    let medicineData: Medicine[] = [];
    
    await Promise.all(
      createPrescriptionDto.medicines.map(async (medicine) => {
        const medicineFound = await this.medicineRepository.findOne({
          where: {
            id: medicine,
          },
        });
    
        medicineData.push(medicineFound);
      })
    );
  
    if (medicineData.length == 0) {
      return this.reponseService.responseError(`Medicine Not Found`, 404);
    }

    prescription.medicines = medicineData;

    const prescriptionCreated = await this.prescriptionRepository.save(prescription);

    return await this.reponseService.responseSuccess(prescriptionCreated, 'Prescription Created', 201);
  }
}
