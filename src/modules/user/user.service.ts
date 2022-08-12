import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";

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
        const newUser = new UserEntity();
        newUser.username = username;
        newUser.password = password
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
        return user;
    }
}