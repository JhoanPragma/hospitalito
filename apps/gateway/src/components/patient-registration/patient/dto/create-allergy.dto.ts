import { IsString, IsNotEmpty } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateAllergyDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}
