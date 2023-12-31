import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateParametricDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    value: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    parametricType: number;
}
