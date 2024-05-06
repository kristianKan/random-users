import { createSelector, select } from '@ngrx/store';

import { User } from '../user/user.model'
import { UsersState } from './users.model'

export const selectUsers = (state: UsersState) => state.users.users;

export const usersSelector = createSelector(
  selectUsers,
  (users: User[]) => users
);

export const selectSelectedId = (state: UsersState) => state.users.selectedId;

export const selectUserById = createSelector(
  selectUsers,
  selectSelectedId,
  (users: User[], selectedId: string) => users.find(user => user.id.value === selectedId)
);