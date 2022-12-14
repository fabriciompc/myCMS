import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EncryptService } from './contracts/encrypt.service';

@Injectable()
export class BCryptEncryptService implements EncryptService {
  async encrypt(value: string): Promise<string> {
    const saltOrRounds = 12;
    const hash = await bcrypt.hash(value, saltOrRounds);
    return hash;
  }
  async compare(value: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(value, hash);
    return isMatch;
  }
}
