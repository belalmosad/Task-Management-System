import { Injectable, Post } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskEntity } from "./task.entity";

@Injectable()
export class TaskService {

    async addOne(createTaskDto: CreateTaskDto) {
        const { 
            title,
            userId,
            statusId
        } = createTaskDto;

        const newTask = new TaskEntity();
        newTask.title = title;
        newTask.user = userId;
        newTask.status = statusId;

        await newTask.save();
        return newTask;
    }
}