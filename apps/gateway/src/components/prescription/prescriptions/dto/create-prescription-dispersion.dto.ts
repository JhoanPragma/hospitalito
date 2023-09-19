import { IsNotEmpty, IsNumber } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePrescriptionDispersionDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    prescription: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    pharmacy: number;
}
