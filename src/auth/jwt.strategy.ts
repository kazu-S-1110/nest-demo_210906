import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // ここに復号方法などを書いていく。
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }
  //下の行は絶対に書かないとダメ。検証しないことになってしまうから
  async validate(payload: JwtPayload) {
    return payload; //returnを返さなくてもいい？
  }
}
