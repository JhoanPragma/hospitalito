import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTreatmentDto {
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    patient: number;

    // @IsNumber()
    // @IsEmpty()
    // prescription: number;
}
