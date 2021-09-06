import { IsString, MaxLength, MinLength } from 'class-validator';

// classの方がバリデーションが良いらしい？
export class CreateUserDto {
  //以下のようにバリデーションする
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly username: string;
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly password: string;
}
