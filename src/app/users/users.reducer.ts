import { createReducer, on } from '@ngrx/store';
import { loadDataSuccess, loadDataFailure, flagUsers, selectUser } from './users.actions';
import { User } from '../user/user.model';

export const initialState = {
  users: [] ,
  error: null,
  selectedId: '' 
};

export const usersReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { payload }) => {
    const usersProcessed = payload.users.results.map((user: User) => ({ ...user, flagged: false }));
    return { ...state, users: usersProcessed };
  }),
  on(loadDataFailure, (state, { payload }) => ({ ...state, users: [], error: payload.message })),
  on(selectUser, (state, { id }) => ({ ...state, selectedId: id }))
);