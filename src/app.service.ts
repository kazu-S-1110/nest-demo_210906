import { Injectable } from '@nestjs/common';

//serviceの役割はcontrollerで長くなってしまう関数のための置き所
@Injectable()
export class AppService {
  getHello(): string {
    return 'べらぼうめ、一昨日来やがれ！にゃ！';
  }
}
