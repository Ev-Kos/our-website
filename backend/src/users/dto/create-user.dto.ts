import { Length, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @Length(2, 15)
  login: string;

  @Length(2, 30)
  username: string;

  @Length(2, 30)
  usersurname: string;

  @IsOptional()
  @Length(0, 30)
  usersecondname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
