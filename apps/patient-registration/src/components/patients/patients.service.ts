import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../parametrics/entities/city.entity';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { Parametric } from '../parametrics/entities/parametric.entity';
import { ResponseService } from '../../commons/response.service';
import { Allergy } from './entities/allergy.entity';
import { CreateAllergyDto } from './dto/create-allergy.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(Parametric)
    private readonly parametricRepository: Repository<Parametric>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    @InjectRepository(Allergy)
    private readonly allergyRepository: Repository<Allergy>,
    private reponseService: ResponseService,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const existingPatient  = await this.patientRepository.findOne({
      where: [{ identification: createPatientDto.identification }, { email: createPatientDto.email }],
    });

    if (existingPatient) {
      return this.reponseService.responseError('This patient already exists', 400);
    }
  
    const identificationTypeData = await this.parametricRepository.findOne({ 
      where: {
        id: createPatientDto.identification_type
      }
    });

    if (!identificationTypeData) {
      return this.reponseService.responseError('Identification Type Not Found', 404);
    }

    const cityData = await this.cityRepository.findOne({ 
      where: {
        id: createPatientDto.city
      }
    });

    if (!cityData) {
      return this.reponseService.responseError('City Not Found', 404);
    }

    const patient = this.patientRepository.create({
      ...createPatientDto,
      identification_type: identificationTypeData,
      city: cityData,
      allergies: null
    });

    const patientCreated = await this.patientRepository.save(patient);
    
    if (createPatientDto.allergies.length > 0) {
      createPatientDto.allergies.forEach(async (allergy) => {
        allergy.patient = patientCreated.id;
        this.createAllergy(allergy);
      });
    }

    return await this.reponseService.responseSuccess(patientCreated, 'Patient Created', 201);
  }

  async createAllergy(createAllergyDto: CreateAllergyDto) {
    const patientFound  = await this.patientRepository.findOne({
      where: {
        id: createAllergyDto.patient,
      },
    });
  
    const allergyData = await this.allergyRepository.create({
      ...createAllergyDto,
      patient: patientFound,
    });

    const allergyCreated = await this.allergyRepository.save(allergyData);

    patientFound.allergies = [ allergyCreated ];

    await this.patientRepository.save(patientFound);

    return await this.reponseService.responseSuccess(allergyData, 'Allergy Created', 201);
  }

  async findAll() {
    const patientsFound  = await this.patientRepository.find({
      relations: {
        allergies: true,
      }
    });
    return await this.reponseService.responseSuccess(patientsFound, 'All Patients Found', 201);
  }
}
