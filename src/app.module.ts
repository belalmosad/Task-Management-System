import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/user.entity';
import { TaskEntity } from './modules/task/task.entity';
import { StatusEntity } from './modules/status/status.entity';
import { UserModule } from './modules/user/user.module';
import {ConfigModule} from "@nestjs/config"
@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [
        UserEntity,
        TaskEntity,
        StatusEntity
      ],
      database: process.env.DB_NAME,
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
