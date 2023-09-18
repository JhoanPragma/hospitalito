import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePrescriptionDispersionDto {
    @IsNumber()
    @IsNotEmpty()
    prescription: number;

    @IsNumber()
    @IsNotEmpty()
    pharmacy: number;
}
