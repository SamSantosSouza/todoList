// tasks.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { TaskEntity } from 'src/entity/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
