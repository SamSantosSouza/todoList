import { Injectable } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm"
import { CreateUserDto } from "src/DTO/create-user.dto";
import { UpdateUserDto } from "src/DTO/update-user.dto";
import { UserEntity } from "src/entity/user.entity";
import { Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private repo: Repository<UserEntity>
    ) {}

async getAllUsers() {
    return await this.repo.find();
}

async addNewUser(CreateUserDto: CreateUserDto){
    const user = new UserEntity();
    const { username, email, password} = CreateUserDto
    user.username = username;
    user.email = email;
    user.password = password;

this.repo.create(user);
return this.repo.save(user);
}

async updateUser(UpdateUserDto: UpdateUserDto, id: string){
    await this.repo.update(id, UpdateUserDto);
    return this.repo.findOneBy({id});
}

async deleteUser(id: string) {
    return await this.repo.delete(id);
}

}