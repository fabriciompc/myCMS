import { Role } from '@prisma/client';

export class User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  password: string;
  role: Role;
}
