import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsDate } from 'class-validator';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  @IsDate()
  created_At: Date;

  @UpdateDateColumn()
  @IsDate()
  updated_At: Date;
}
