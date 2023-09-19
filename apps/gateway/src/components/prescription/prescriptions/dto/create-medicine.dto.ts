import { IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateMedicineDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    due_date: string;
}
