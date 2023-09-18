import { PartialType } from '@nestjs/mapped-types';
import { CreatePrescriptionDispersionDto } from './create-prescription-dispersion.dto';

export class UpdatePrescriptionDispersionDto extends PartialType(CreatePrescriptionDispersionDto) {
  id: number;
}
