import { Entity, Column } from 'typeorm';
import { Length, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
import { BaseEntity } from 'src/utils/base-entity';

@Entity({ database: 'our-website' })
export class User extends BaseEntity {
  @Column({ unique: true })
  @Length(2, 15)
  login: string;

  @Column()
  @Length(2, 30)
  username: string;

  @Column()
  @Length(2, 30)
  usersurname: string;

  @Column()
  @IsOptional()
  @Length(2, 30)
  usersecondname: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ default: false })
  @IsOptional()
  super_user: boolean;
}
