import { IsString, IsNumber, IsNotEmpty, IsEmpty } from "class-validator";
import { CreateAllergyDto } from "./create-allergy.dto";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePatientDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    full_last_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    mobile: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    identification_type: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    identification: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNotEmpty()
    birthdate: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    profession: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    city: number;

    @ApiProperty()
    @IsEmpty()
    allergies: CreateAllergyDto[];
}
