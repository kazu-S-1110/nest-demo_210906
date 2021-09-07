import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// classのデコレータ
@Module({
  // mongodbと接続するためのmongooseModuleをimportする、これが便利らしい！
  imports: [UsersModule, MongooseModule.forRoot(process.env.MONGODB_KEY)], //cliでmoduleを追加すると自動で補完してくれる！

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
