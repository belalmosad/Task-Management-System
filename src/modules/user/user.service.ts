import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import * as bcrypt from "bcrypt";
import { TaskEntity } from "../task/task.entity";
import { StatusEntity } from "../status/status.entity";
import { ChangeTaskDto } from "./dto/change-task.dto";

@Injectable()
export class UserService {

    async findAll() {
        const users = await UserEntity.find({ relations: ["tasks"] });
        return users
    }

    async signUp(newUserData: CreateUserDto) {
        const {
            username,
            password
        } = newUserData

        const user = await UserEntity.findOne({ where: { username } });
        if (user) {
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
        const user = await UserEntity.findOne({ where: { username } });
        if (!user) {
            throw new UnauthorizedException();
        }
        const isCorrectPassword = bcrypt.compareSync(password, user.password);
        if (!isCorrectPassword) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async changeTaskStatus(changeTaskDto: ChangeTaskDto) {
        const { 
            taskId,
            newStatusId
        } = changeTaskDto;
        const task = await TaskEntity.findOne({where: {id: taskId}});
        if(!task) {
            throw new NotFoundException();
        }
        task.status = newStatusId;
        await task.save();
        return task;

    }
}