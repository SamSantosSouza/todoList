import { Injectable } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm"
import { CreateTaskDto } from "src/DTO/create-task.dto";
import { UpdateTaskDto } from "src/DTO/update-task.dto";
import { TaskEntity } from "src/entity/task.entity";
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

  async updateTask(id: string, data: UpdateTaskDto) {
    await this.taskRepo.update(id, data);
    return this.taskRepo.findOne({ where: { id } });
  }

  async deleteTask(id: string) {
    return this.taskRepo.delete(id);
  }
}