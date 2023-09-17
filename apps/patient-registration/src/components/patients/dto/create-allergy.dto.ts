import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateAllergyDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    patient: number;
}
