import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//コントローラの役割はどんなURLが来たらどんな値を返すか
@Controller()
export class AppController {
  //関数を定義する前にはちゃんとデコレータ（GET,PUT,POST,DELETE）をつける
  @Get('hello') //括弧内にurlを指定する
  getHell() {
    return 'べらぼうめ、一昨日来やがれ！';
  }

  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
