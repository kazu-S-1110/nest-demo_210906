import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  // JWTモジュールを利用してJWTを実装する。ここで色々設定を書き込む
  imports: [
    // UserServiceを使いたいのでUserModuleをimportする、importするためにexportが必要
    UsersModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
