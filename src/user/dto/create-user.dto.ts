import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  birthdate: string;
  @IsNotEmpty()
  phoneNumber: string;
  @IsNotEmpty()
  gender: string;
  @IsNotEmpty()
  subscribeType: string;
}
