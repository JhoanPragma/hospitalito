import { PartialType } from '@nestjs/mapped-types';
import { CreateParametricDto } from './create-parametric.dto';

export class UpdateParametricDto extends PartialType(CreateParametricDto) {}
