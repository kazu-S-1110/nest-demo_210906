import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUser) {
    //中身を分割して複数取得したい場合=> Body("username") username, Body("password")password
    // 他の値の取得方法も色々あり @Param(id) @Query()
    return createUser;
  }
}
