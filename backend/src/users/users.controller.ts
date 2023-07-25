import {
  Controller,
  Patch,
  Body,
  Post,
  Req,
  Get,
  UseGuards,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
}
