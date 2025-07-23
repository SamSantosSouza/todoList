import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("tasks")
export class TaskEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;

     @ManyToOne(() => UserEntity, user => user.tasks)
  user: UserEntity;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  DONE = 'DONE',
}