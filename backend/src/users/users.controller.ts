import {
  Controller,
  Req,
  Get,
  UseGuards,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  getUser(@Req() req: any) {
    return this.usersService.findOne(req.user.id);
  }
}
