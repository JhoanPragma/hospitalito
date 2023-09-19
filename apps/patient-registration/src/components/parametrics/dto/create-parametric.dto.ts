import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateParametricDto {
    @IsString()
    @IsNotEmpty()
    value: string;

    @IsNumber()
    @IsNotEmpty()
    parametricType: number;
}
