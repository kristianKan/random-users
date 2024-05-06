import { User } from '../user//user.model';

export interface UsersState {
  users: {
    users: User[];
    selectedId: string
    error: any;
  }
}