import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordHashService } from 'src/password-hash/password-hash.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private passwordHashService: PasswordHashService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const login = await this.findUserLogin(createUserDto.login);
    const email = await this.findEmail(createUserDto.email);
    if (login !== null) {
      throw new ForbiddenException(
        'Пользователь с таким логином уже зарегистрирован',
      );
    }
    if (email) {
      throw new ForbiddenException(
        'Пользователь с такой почтой уже зарегистрирован',
      );
    }
    const user = this.usersRepository.create(createUserDto);
    user.password = await this.passwordHashService.createHash(user.password);
    return await this.usersRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findUserLogin(login: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        login: login,
      },
    });
  }

  async findEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
