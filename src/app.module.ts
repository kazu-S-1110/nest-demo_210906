import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

// classのデコレータ
@Module({
  imports: [UsersModule], //cliでmoduleを追加すると自動で補完してくれる！
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
