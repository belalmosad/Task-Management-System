import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/user.entity';
import { TaskEntity } from './modules/task/task.entity';
import { StatusEntity } from './modules/status/status.entity';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
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
})
export class AppModule { }
