// classの方がバリデーションが良いらしい？
export class CreateUserDto {
  readonly username: string;
  readonly password: string;
}
