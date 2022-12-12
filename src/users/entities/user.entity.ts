import { Roles } from '../../@types/roles';

export class User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  password: string;
  role: Roles;
}
