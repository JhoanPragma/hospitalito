import { Inject, Injectable  } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PatientService {
  constructor(@Inject('PATIENT_REGISTRATION_MICROSERVICE') private client: ClientProxy,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    return await this.client.send('createPatient', { ...createPatientDto });
  }

  async findAll() {
    return await this.client.send('findAllPatients', '');
  }

  async findOne(id: number) {
    return await this.client.send('findOnePatient', id);
  }
}
