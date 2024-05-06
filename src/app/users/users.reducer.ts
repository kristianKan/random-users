import { createReducer, on } from '@ngrx/store';
import { loadDataSuccess, loadDataFailure, flagUser, selectUser } from './users.actions';
import { User } from '../user/user.model';
import { UsersState } from './users.model';

export const initialState: UsersState = {
  users: [] ,
  error: null,
  selectedId: '' 
};

export const usersReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { payload }) => {
    // add flagged property to each user
    const usersProcessed = payload.users.results.map((user: User) => ({ ...user, flagged: false }));
    return { ...state, users: usersProcessed };
  }),
  on(loadDataFailure, (state, { payload }) => ({ ...state, users: [], error: payload.message })),
  on(selectUser, (state, { id }) => ({ ...state, selectedId: id })),
  on(flagUser, (state, { id, flag }) => {
    const updatedUsers = state.users.map((user: User) => user.id.value === id ? { ...user, flagged: flag } : user);
    return { ...state, users: updatedUsers}
  })
);