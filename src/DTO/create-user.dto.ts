import { IsNotEmpty, IsEmail, MinLength, MaxLength} from "class-validator"

export class CreateUserDto {
@IsNotEmpty()
username: string;

@IsEmail()
email: string;

@IsNotEmpty()
@MinLength(6)
@MaxLength(12)
password: string;

}