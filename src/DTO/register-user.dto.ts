import { IsNotEmpty, Matches, MinLength, MaxLength} from "class-validator"

export class RegisterUserDto {
@IsNotEmpty()
username: string;

@IsNotEmpty()
@MinLength(6)
@MaxLength(12)
@Matches(/(?:(?=.*\d)(?=.*\w)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[A-Z])(?=.*[a-z]).*$)/, {
  message: 'Senha fraca, crie uma senha mais forte que contenha entre 6 e 12 caracteres.'
})
password: string;

}