import { User } from '../user//user.model';

export interface State {
  users: UsersState; 
}

export interface UsersState {
  users: User[];
  selectedId: string
  error: any;
}