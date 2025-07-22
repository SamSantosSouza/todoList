import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete } from '@nestjs/common'

import { ValidationPipe } from '@nestjs/common'
import { CreateUserDto } from 'src/DTO/create-user.dto'
import { UpdateUserDto } from 'src/DTO/update-user.dto'
import { UserService } from './user.service';


@Controller("users")
export class UserController {
    constructor (private userService: UserService) {}

@Get()
getAllUsers() {
    return this.userService.getAllUsers();
}

@Post ()
addNewUser(@Body(ValidationPipe) data: CreateUserDto){
    return this.userService.addNewUser(data);
}

@Patch(":id")
updateUser(@Param("id") id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return this.userService.updateUser(UpdateUserDto, id);
}

@Delete(":id")
deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
}
}