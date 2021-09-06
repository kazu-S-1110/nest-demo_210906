import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  // userの配列を作る
  users: CreateUserDto[] = [];
  create(user: CreateUserDto) {
    this.users.push(user); // usersの配列に引数のuserを追加する
  }
  findAll() {
    return this.users;
  }
}
