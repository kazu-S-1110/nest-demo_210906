import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createUser.dto';

@Injectable()
export class AuthService {
  async login(user: CreateUserDto) {}
}
