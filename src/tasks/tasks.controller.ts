import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { Request } from 'express';
import { CreateTaskDTO } from './dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('/')
  async getTasks(@Res() res) {
    const tasks = await this.taskService.getTasks();
    console.log('Hola desde controller');
    return res.status(HttpStatus.OK).send(tasks);
  }
  //as
  @Get('/:id')
  async getTask(@Res() res, @Param('id') id) {
    try {
      const task = await this.taskService.getTask(id);
      if (!task) throw new NotFoundException('Task does not exist!');
      return res.status(HttpStatus.OK).send(task);
    } catch (error) {
      console.log(error);
    }
  }

  @Post('/')
  async createTask(@Res() res, @Body() createTaskDTO: CreateTaskDTO) {
    const task = await this.taskService.createTask(createTaskDTO);
    return res.status(201).send(task);
  }

  @Put('/:id')
  async updateTask(
    @Res() res,
    @Body() createTaskDTO: CreateTaskDTO,
    @Param('id') id,
  ) {
    const updatedTask = await this.taskService.updateTask(id, createTaskDTO);
    if (!updatedTask) throw new NotFoundException('Task does not exist!');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Edited correctly', updatedTask });
  }

  @Delete('/:id')
  async deleteTask(@Res() res, @Param('id') id) {
    const deletedTask = await this.taskService.deleteTask(id);
    if (!deletedTask) throw new NotFoundException('Task does not exist!');
    return res.status(HttpStatus.OK).json({ message: 'Deleted correctly' });
  }
}
