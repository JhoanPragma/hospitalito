import { IsNotEmpty, IsString } from "class-validator";

export class CreateMedicineDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    due_date: string;
}
