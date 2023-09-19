import { IsString, IsNotEmpty } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCountryDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}
