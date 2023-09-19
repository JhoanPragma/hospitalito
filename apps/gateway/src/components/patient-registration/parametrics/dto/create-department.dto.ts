import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateDepartmentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    country: number;
}
