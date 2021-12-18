import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dto/task.dto';
import { ITask } from './interface/tasks.interface';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Tasks') private readonly tasksModel: Model<ITask>,
  ) {}

  async getTasks(): Promise<ITask[]> {
    return await this.tasksModel.find();
  }

  async getTask(id: string): Promise<ITask> {
    try {
      return await this.tasksModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<ITask> {
    return await this.tasksModel.create(createTaskDTO);
  }

  async updateTask(id: string, createTaskDTO: CreateTaskDTO): Promise<ITask> {
    return await this.tasksModel.findByIdAndUpdate(id, createTaskDTO, {
      new: true,
    });
  }

  async deleteTask(id: string): Promise<any> {
    return await this.tasksModel.findByIdAndRemove(id);
  }
}
