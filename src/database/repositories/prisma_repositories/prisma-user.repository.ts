import { CreateUserDto } from './../../../users/dto/create-user.dto';
import { User } from './../../../users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../contracts/user.repository';
import { PrismaService } from './../../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll(): Promise<any> {
    return await this.prismaService.user.findMany();
  }
  async create(userCreateDto: CreateUserDto): Promise<User> {
    const data = {
      name: userCreateDto.name,
      lastName: userCreateDto.lastName,
      email: userCreateDto.email,
      avatar: userCreateDto.avatar,
      password: userCreateDto.password,
      role: userCreateDto.role,
    };

    return this.prismaService.user.create({
      data,
    });
  }
}
