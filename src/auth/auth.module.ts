import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: 'cda1b244a2578ffa7b4fad03b940d0e2',
      signOptions: {
        algorithm: 'HS256',
        expiresIn: '1d' 
      }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
