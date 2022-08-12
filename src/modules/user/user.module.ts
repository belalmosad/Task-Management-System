import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusEntity } from "../status/status.entity";
import { TaskEntity } from "../task/task.entity";
import { UserEntity } from "./user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 3000,
        username: 'postgres',
        password: '123',
        entities: [
            UserEntity,
            TaskEntity,
            StatusEntity
        ],
        database: 'task-management-system',
        synchronize: true
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})

export class UserModule { }