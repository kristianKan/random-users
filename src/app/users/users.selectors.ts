import { createSelector } from '@ngrx/store';

import { User } from '../user/user.model'
import { UsersState } from './users.model'

export const selectUsers = (state: UsersState) => state.users.users;

export const usersSelector = createSelector(
  selectUsers,
  (users: User[]) => users
);