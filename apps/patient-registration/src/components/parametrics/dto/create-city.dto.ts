import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCityDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    department: number;
}
