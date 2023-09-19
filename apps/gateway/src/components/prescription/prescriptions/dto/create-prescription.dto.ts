import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePrescriptionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    details: string;

    @ApiProperty()
    @IsNotEmpty()
    medicines: number[];

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    dose: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    instructions: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    treatment: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    pharmacy: number;
}
