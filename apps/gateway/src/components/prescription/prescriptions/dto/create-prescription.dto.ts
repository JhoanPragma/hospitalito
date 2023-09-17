import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePrescriptionDto {
    @IsString()
    @IsNotEmpty()
    details: string;

    @IsNotEmpty()
    medicines: number[];

    @IsNumber()
    @IsNotEmpty()
    dose: string;

    @IsString()
    @IsNotEmpty()
    instructions: string;

    @IsNumber()
    @IsNotEmpty()
    treatment: number;
}
