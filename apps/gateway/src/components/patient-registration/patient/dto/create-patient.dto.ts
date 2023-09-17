import { IsString, IsNumber, IsNotEmpty, IsEmpty } from "class-validator";
import { CreateAllergyDto } from "./create-allergy.dto";

export class CreatePatientDto {
    @IsString()
    @IsNotEmpty()
    fullname: string;

    @IsString()
    @IsNotEmpty()
    full_last_name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    mobile: string;

    @IsNumber()
    @IsNotEmpty()
    identification_type: number;

    @IsString()
    @IsNotEmpty()
    identification: string;

    @IsNotEmpty()
    @IsNotEmpty()
    birthdate: Date;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    profession: string;

    @IsNumber()
    @IsNotEmpty()
    city: number;

    @IsEmpty()
    allergies: CreateAllergyDto[];
}
