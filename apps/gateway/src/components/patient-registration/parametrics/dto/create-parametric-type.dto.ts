import { IsString, IsNotEmpty } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateParametricTypeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    value: string;
}
