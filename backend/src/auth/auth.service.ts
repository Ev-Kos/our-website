/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordHashService } from '../password-hash/password-hash.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private passwordHashService: PasswordHashService,
  ) {}

  async auth(user: User) {
    console.log('User ', User);
    const payload = { sub: user.id };
    console.log('payload ', payload);
    const a = await this.jwtService.signAsync(payload);
    console.log('a ', a);
    return { access_token: a };
    /*return { access_token: await this.jwtService.signAsync(payload) };*/
  }

  async validateUser(login: string, password: string) {
    const user = await this.usersService.findUserLogin(login);
    const validPassword = await this.passwordHashService.validPassword(
      password,
      user.password,
    );
    if (user) {
      if (validPassword) {
        const { password, ...result } = user;
        return result;
      } else {
        throw new UnauthorizedException(
          'Неверный логин пользователя или пароль',
        );
      }
    }
    return null;
  }
}
