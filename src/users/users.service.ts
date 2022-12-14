import { EncryptService } from 'src/utils/contracts/encrypt.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './../database/contracts/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new BadRequestException('Passwords dont match');
    }

    createUserDto.password = await this.encryptService.encrypt(
      createUserDto.password,
    );

    return this.userRepository.create(createUserDto);
  }

  async findAll() {
    return this.userRepository.getAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findByEmail(email: string) {
    return new User();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
