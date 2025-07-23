import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm"
import { CreateTaskDto } from "src/DTO/create-task.dto";
import { UpdateTaskDto } from "src/DTO/update-task.dto";
import { TaskEntity, TaskStatus } from "src/entity/task.entity";
import { UserEntity } from "src/entity/user.entity";
import { Repository} from "typeorm";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity) private taskRepo: Repository<TaskEntity>
    ) {}

      async getAllTasks() {
    return this.taskRepo.find();
  }

  async addNewTask(data: CreateTaskDto) {
    const task = this.taskRepo.create(data);
    return this.taskRepo.save(task);
  }

  async updateTask(id: string, status: TaskStatus, data: UpdateTaskDto) {
    try{
    await this.taskRepo.update({ id }, { ...data, status });
    return this.taskRepo.findOne({ where: { id } });
    }
    catch (error) {
      throw new InternalServerErrorException('Algo deu errado ao atualizar a tarefa');
    }
  }

  async deleteTask(id: string) {
    try {
    return this.taskRepo.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Algo deu errado ao deletar a tarefa');
    }
  }
}