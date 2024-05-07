import { createSelector, select } from '@ngrx/store';

import { User, State } from './users.models'

export const selectUsers = (state: State) => state.users.users;

export const usersSelector = createSelector(
  selectUsers,
  (users: User[]) => [...users].sort((a: User, b: User) => Number(b.flagged) - Number(a.flagged))
);

export const selectSelectedId = (state: State) => state.users.selectedId;

export const selectUserById = createSelector(
  selectUsers,
  selectSelectedId,
  (users: User[], selectedId: string) => users.find(user => user.id === selectedId)
);