import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateTreatmentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    patient: number;
}
