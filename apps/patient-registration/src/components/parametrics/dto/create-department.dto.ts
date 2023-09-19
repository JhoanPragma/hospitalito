import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDepartmentDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    country: number;
}
