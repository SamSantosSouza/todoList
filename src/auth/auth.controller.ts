import { Body, Controller , Post, ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/DTO/register-user.dto';

//http://localhost:3000/api/auth/register
@Controller('auth')
export class AuthController {

constructor(private authService: AuthService) {}

    @Post('register')
    registration(@Body(ValidationPipe) regDto: RegisterUserDto) {
      return  this.authService.registerUser(regDto);
    }
}
