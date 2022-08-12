import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";

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

    @Post()
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

}