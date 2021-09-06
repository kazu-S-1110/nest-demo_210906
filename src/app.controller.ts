import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//コントローラの役割はどんなURLが来たらどんな値を返すか
@Controller() //ここの括弧にURLを入れることも可能
export class AppController {
  // serviceで書いたものを取り込んでくれる処理
  constructor(private readonly appService: AppService) {}

  //関数を定義する前にはちゃんとデコレータ（GET,PUT,POST,DELETE）をつける
  @Get('hello') //括弧内にurlを指定する
  getHell() {
    return this.appService.getHello();
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
