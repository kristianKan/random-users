import { createReducer, on } from '@ngrx/store';
import { loadDataSuccess, loadDataFailure, flagUser, selectUser } from './users.actions';
import { User, UsersState } from './users.models';

export const initialState: UsersState = {
  users: [] ,
  error: null,
  selectedId: '' 
};

export const usersReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { payload }) => {
    // add property 'flagged' to each user
    const processedUsers = payload.users.results.map((user: User) => ({ ...user, flagged: false }))
    // sort users alphabetically
      .sort((a: User, b: User) => a.name.first.localeCompare(b.name.first));
    return { ...state, users: processedUsers };
  }),
  on(loadDataFailure, (state, { payload }) => ({ ...state, users: [], error: payload.message })),
  on(selectUser, (state, { id }) => ({ ...state, selectedId: id })),
  on(flagUser, (state, { id, flag }) => {
    // find the user by id and update the flagged property
    const updatedUsers = state.users.map((user: User) => user.id.value === id ? { ...user, flagged: flag } : user);
    return { ...state, users: updatedUsers}
  })
);