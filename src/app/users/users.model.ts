import { User } from '../user//user.model';

export interface UsersState {
  users: {
    users: User[];
    loading: boolean;
    error: any;
  }
}