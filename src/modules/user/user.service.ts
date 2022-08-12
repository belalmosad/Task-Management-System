import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

    async findAll() {
        const users = await UserEntity.find({relations: ["tasks"]});
        return users
    }

    async signUp(newUserData: CreateUserDto) {
        const {
            username,
            password
        } = newUserData

        const user = await UserEntity.findOne({where: {username}});
        if(user) {
            throw new BadRequestException('Username is already used');
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new UserEntity();
        newUser.username = username;
        newUser.password = hashedPassword
        await newUser.save();
        return newUser;
    }

    async signIn(userData: CreateUserDto) {
        const {
            username,
            password
        } = userData;
        const user = await UserEntity.findOne({where: {username, password}});
        if(!user) {
            throw new UnauthorizedException();
        }
        const isCorrectPassword = bcrypt.compareSync(password, user.password);
        if(!isCorrectPassword) {
            throw new UnauthorizedException();
        }
        return user;
    }
}