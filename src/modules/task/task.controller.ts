import { Body, Controller, Post } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskEntity } from "./task.entity";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Post()
    async addOne(
        @Body() taskDTO: CreateTaskDto
    ) {
        const newTask = await this.taskService.addOne(taskDTO);
        return newTask;
    }
    
}