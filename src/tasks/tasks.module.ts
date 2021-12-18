import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksSchema } from './schemas/tasks.chema';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tasks', schema: TasksSchema }]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
