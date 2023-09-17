import { IsString, IsNotEmpty, IsNumber, IsEmpty } from "class-validator";

export class CreateAllergyDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
