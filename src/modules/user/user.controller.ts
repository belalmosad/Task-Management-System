import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){
    }

    @Get()
    async findAll() {
        const users = await this.userService.findAll();
        return users;
    }

    @Post()
    async addOne(
        @Body() createUserDto: CreateUserDto
    ) {
        const newUser = await this.userService.addOne(createUserDto);
        return newUser;
    }

}