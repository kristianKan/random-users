import { createSelector, select } from '@ngrx/store';

import { User } from '../user/user.model'
import { State } from './users.model'

export const selectUsers = (state: State) => state.users.users;

export const usersSelector = createSelector(
  selectUsers,
  (users: User[]) => users
);

export const selectSelectedId = (state: State) => state.users.selectedId;

export const selectUserById = createSelector(
  selectUsers,
  selectSelectedId,
  (users: User[], selectedId: string) => users.find(user => user.id.value === selectedId)
);