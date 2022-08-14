import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { TaskEntity } from "../task/task.entity";
import { ChangeTaskDto } from "./dto/change-task.dto";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){
    }

    @Get()
    async findAll() {
        const users = await this.userService.findAll();
        return users;
    }

    @Post('/signup')
    async signUp(
        @Body() createUserDto: CreateUserDto
    ) {
        const newUser = await this.userService.signUp(createUserDto);
        return newUser;
    }

    @Post('/signin')
    async signIn(
        @Body() userData: CreateUserDto
    ) {
        const user = await this.userService.signIn(userData);
        return user;
    }

    @Post('/:id/change-task-status')
    async changeTaskStatus(
        @Body() changeTaskDto: ChangeTaskDto,
    ) {
        const task = await this.userService.changeTaskStatus(changeTaskDto);
        return task;
    }



}