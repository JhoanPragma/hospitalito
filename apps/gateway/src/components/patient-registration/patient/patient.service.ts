import { Inject, Injectable  } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ResponseService } from 'apps/gateway/src/commons/response.service';

@Injectable()
export class PatientService {
  constructor(@Inject('PATIENT_REGISTRATION_MICROSERVICE') private client: ClientProxy,
  private reponseService: ResponseService,
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

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    return await this.client.send('updatePatient', {...updatePatientDto, id});
  }

  async remove(id: number) {
    return await this.client.send('removePatient', id);
  }
}
