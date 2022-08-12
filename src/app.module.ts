import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/user.entity';
import { TaskEntity } from './modules/task/task.entity';
import { StatusEntity } from './modules/status/status.entity';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from "@nestjs/config"
import { PrintRequests } from './middlewares/print-requests.middleware';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrintRequests)
      .forRoutes('/');
  }
}
