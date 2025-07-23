import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from 'src/DTO/create-task.dto';
import { UpdateTaskDto } from 'src/DTO/update-task.dto';
import { TaskStatusValidatorPipe } from 'pipes/TaskStatusValidator.pipe';
import { TaskStatus } from 'src/entity/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  addNewTask(@Body() data: CreateTaskDto) {
    return this.taskService.addNewTask(data);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body('status', TaskStatusValidatorPipe) status: TaskStatus, data: UpdateTaskDto) {
    return this.taskService.updateTask(id, status, data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
