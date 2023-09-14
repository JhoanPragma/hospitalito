import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientRegistrationService {
  getHello(): string {
    return 'Hello World!';
  }
}
