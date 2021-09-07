import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Post()
  // dto => DataTransferObject Typescriptでいう型情報のことかな？
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    //ValidationPipeを挟むことで型情報を埋め込む
    //中身を分割して複数取得したい場合=> Body("username") username, Body("password")password
    // 他の値の取得方法も色々あり @Param(id) @Query()
    return this.usersService.create(createUser);
  }
}
