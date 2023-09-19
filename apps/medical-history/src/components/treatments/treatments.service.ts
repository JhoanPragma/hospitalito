import { Injectable } from '@nestjs/common';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { ResponseService } from '../../commons/response.service';
import { Treatment } from './entities/treatment.entity';

@Injectable()
export class TreatmentsService {
  constructor(
    @InjectRepository(Treatment)
    private readonly treatmentRepository: Repository<Treatment>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    private reponseService: ResponseService,
    ) {}

  async create(createTreatmentDto: CreateTreatmentDto) {
    const patientData = await this.patientRepository.findOne({
      where: {
        id: createTreatmentDto.patient,
      },
    });

    if (!patientData) {
      return this.reponseService.responseError('Patient Not Found', 404);
    }
  
    const treatment = this.treatmentRepository.create({
      ...createTreatmentDto,
      patient: patientData,
      prescription: null,
    });
  
    const treatmentCreated = await this.treatmentRepository.save(treatment);

    return await this.reponseService.responseSuccess(treatmentCreated, 'Treatment Created', 201);
  }

  async clinicHistory(patientId: number) {
    const patientData = await this.patientRepository.findOne({
        where: {
          id: patientId,
        },
        relations: {
          allergies: true,
        },
    });
    
    if (!patientData) {
      return this.reponseService.responseError('Patient Not Found', 404);
    }

    const treatmentData = await this.treatmentRepository.find({
      where: {
        patient: {
          id: patientData.id,
        },
      },
      relations: {
        patient: {
          allergies: true,
        },
        prescription: {
          medicines: true,
        },
      },
    });
    
    if (treatmentData.length == 0) {
      return this.reponseService.responseError('Not Found Clinic History', 404);
    }

    return await this.reponseService.responseSuccess(treatmentData, 'Clinic History Found', 201);
  }
}
