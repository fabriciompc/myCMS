import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';
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
  confirmPassword: string;

  @IsNotEmpty()
  role: Role;
}
