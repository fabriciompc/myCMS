import { CreateUserDto } from './../../users/dto/create-user.dto';
import { User } from './../../users/entities/user.entity';
export abstract class UserRepository {
  abstract getAll(): Promise<any>;
  abstract create(user: CreateUserDto): Promise<User>;
}
