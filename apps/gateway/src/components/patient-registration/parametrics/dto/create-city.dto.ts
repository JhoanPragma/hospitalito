import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCityDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    department: number;
}
