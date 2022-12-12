import { IsEmail, IsNotEmpty } from 'class-validator';
import { Roles } from './../../@types/roles';
export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  avatar: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: Roles;
}
