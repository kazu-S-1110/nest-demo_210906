import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async validateUser({ username, password }: CreateUserDto) {
    // databaseにあるユーザを照会したい、つまりuserModuleのuserServiceを使いたい
    const user = await this.usersService.findOne(username);
    const isValid = await bcrypt.compare(password, user.password); //compareメソッドで一致しているか比較してくれる
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return isValid;
  }
  async login(user: CreateUserDto) {
    if (await this.validateUser(user)) {
      const payload = { username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
