import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/nestjs'),
    // 'mongodb://mongo:27018/mydatabase'
    // 'mongodb://mongo/nestjs'
    TasksModule,
    UsersModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
