import { Injectable } from '@nestjs/common';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { ResponseService } from '../../commons/response.service';
import { Treatment } from './entities/treatment.entity';
import { Prescription } from './entities/prescription.entity';

@Injectable()
export class TreatmentsService {
  constructor(
    @InjectRepository(Prescription)
    private readonly prescriptionRepository: Repository<Prescription>,
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

    // if (createTreatmentDto.prescription) {
    //   const prescriptionData = await this.prescriptionRepository.findOne({ 
    //     where: {
    //       id: createTreatmentDto.prescription,
    //     }
    //   });

    //   if (!prescriptionData) {
    //     return this.reponseService.responseError('Prescription Not Found', 404);
    //   }

    //   treatment.prescription = prescriptionData;
    // }
  
    const treatmentCreated = await this.treatmentRepository.save(treatment);

    return await this.reponseService.responseSuccess(treatmentCreated, 'Treatment Created', 201);
  }

  findAll() {
    return `This action returns all treatments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} treatment`;
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

  update(id: number, updateTreatmentDto: UpdateTreatmentDto) {
    return `This action updates a #${id} treatment`;
  }

  remove(id: number) {
    return `This action removes a #${id} treatment`;
  }
}
