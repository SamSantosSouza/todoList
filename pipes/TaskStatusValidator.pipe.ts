import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "src/entity/task.entity";

export class TaskStatusValidatorPipe implements PipeTransform {
    readonly    allowedStatuses = [TaskStatus.OPEN, TaskStatus.WIP, TaskStatus.DONE];

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`"${value}" is an invalid status`);
        }

        return value;
    }
    
    private isStatusValid(status: any) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}