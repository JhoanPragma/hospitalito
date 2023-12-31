import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePharmacyDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;
}
