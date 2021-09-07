import { User } from './interfaces/user.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  // 下のコードを書くことでDBのuserにアクセスできる
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  // userの配列を作る
  users: CreateUserDto[] = [];
  async create(user: CreateUserDto) {
    const createUser = new this.userModel({
      username: user.username,
      //passwordをハッシュ化する
      password: await bcrypt.hash(user.password, 12),
    });
    createUser.save();

    // this.users.push(user); // usersの配列に引数のuserを追加する
  }
  async findAll() {
    return await this.userModel.find().exec();
  }
  async findOne(username: string) {
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) {
      throw new NotFoundException('Could not find user ...'); //NotFoundExceptionを使うと便利♪
    }
    // 更新するなら
    // user.username = "hogehoge"
    // user.save()
    // 削除するなら
    // this.userModel.deleteOne({username}).exec()
    return user;
  }
}
