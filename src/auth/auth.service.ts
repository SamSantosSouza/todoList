import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { RegisterUserDto } from 'src/DTO/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { hash } from 'crypto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>) {}

    async registerUser(registerDto: RegisterUserDto) {
        const { username, password } = registerDto;
        const hashed = await bcrypt.hash(password, 12);
        const salt = await bcrypt.getSalt(hashed);
        
        const user = new UserEntity();
        user.username = username;
        user.password = hashed;
        user.salt = salt;

        this.userRepo.create(user);
        try {
        return await this.userRepo.save(user)
        } 
        catch (err) {
            throw new InternalServerErrorException('Erro ao registrar usuário:');
        }
    }
}
