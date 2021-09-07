import { User } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  // 下のコードを書くことでDBのuserにアクセスできる
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  // userの配列を作る
  users: CreateUserDto[] = [];
  async create(user: CreateUserDto) {
    const createUser = new this.userModel({
      username: user.username,
      password: user.password,
    });
    return await createUser.save();
    // this.users.push(user); // usersの配列に引数のuserを追加する
  }
  async findAll() {
    return await this.userModel.find().exec();
  }
}
