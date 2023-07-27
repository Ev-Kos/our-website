import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PasswordHashModule } from 'src/password-hash/password-hash.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PasswordHashModule],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
