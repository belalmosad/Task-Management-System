import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { StatusEntity } from "src/modules/status/status.entity";

export class ChangeTaskDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    taskId: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    newStatusId: StatusEntity
}