import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { StatusEntity } from "src/modules/status/status.entity";
import { UserEntity } from "src/modules/user/user.entity";

export class CreateTaskDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty()
    @IsNotEmpty()
    userId: UserEntity

    @ApiProperty()
    @IsNotEmpty()
    statusId: StatusEntity
}