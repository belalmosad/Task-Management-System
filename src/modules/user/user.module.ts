import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusEntity } from "../status/status.entity";
import { TaskEntity } from "../task/task.entity";
import { UserEntity } from "./user.entity";

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})

export class UserModule { }