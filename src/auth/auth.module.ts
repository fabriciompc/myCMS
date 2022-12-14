import { PrismaService } from './../database/prisma.service';
import { PrismaUserRepository } from './../database/repositories/prisma_repositories/prisma-user.repository';
import { BCryptEncryptService } from './../utils/bcrypt-encrypt.service';
import { EncryptService } from 'src/utils/contracts/encrypt.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from './../users/users.service';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './../users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/jwt.constants';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { UserRepository } from 'src/database/contracts/user.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtService,
    UsersService,
    JwtStrategy,
    PrismaService,
    { provide: EncryptService, useClass: BCryptEncryptService },
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
