import { PrismaService } from './../database/prisma.service';
import { BCryptEncryptService } from './../utils/bcrypt-encrypt.service';
import { Module } from '@nestjs/common';
import { EncryptService } from 'src/utils/contracts/encrypt.service';
import { UserRepository } from './../database/contracts/user.repository';
import { PrismaUserRepository } from './../database/repositories/prisma_repositories/prisma-user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: EncryptService, useClass: BCryptEncryptService },
  ],
})
export class UsersModule {}
