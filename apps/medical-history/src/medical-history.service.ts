import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicalHistoryService {
  getHello(): string {
    return 'Hello World!';
  }
}
