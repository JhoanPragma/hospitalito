import { IsString, IsNotEmpty } from "class-validator";

export class CreateParametricTypeDto {
    @IsString()
    @IsNotEmpty()
    value: string;
}
