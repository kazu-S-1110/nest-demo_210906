import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

// classのデコレータ
@Module({
  // mongodbと接続するためのmongooseModuleをimportする、これが便利らしい！
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://kazuya:Rx9GnVVrRl2FKffM@cluster0.lqapm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ], //cliでmoduleを追加すると自動で補完してくれる！

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
