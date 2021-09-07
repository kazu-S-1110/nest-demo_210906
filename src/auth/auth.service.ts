import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async validateUser({ username, password }: CreateUserDto) {
    // databaseにあるユーザを照会したい、つまりuserModuleのuserServiceを使いたい
    const user = this.usersService.findOne(username);
    return true;
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
