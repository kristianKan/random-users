import { createReducer, on, ActionReducer } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

import { loadDataSuccess, loadDataFailure, flagUser, selectUser, loadDataFromLocalStorage } from './users.actions';
import { User, UsersState, State } from './users.models';

export const initialState: UsersState = {
  users: [] ,
  error: null,
  selectedId: '' 
};

export const usersReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { payload }) => {
    // add properties 'flagged' and 'id' to each user
    // such flags should generally be handled on the the backend
    const processedUsers = payload.users.results.map((user: User) => ({ ...user, flagged: false, id: uuidv4() }))
    // sort users alphabetically
      .sort((a: User, b: User) => a.name.first.localeCompare(b.name.first));
    return { ...state, users: processedUsers };
  }),
  on(loadDataFailure, (state, { payload }) => ({ ...state, users: [], error: payload.message })),
  on(selectUser, (state, { id }) => ({ ...state, selectedId: id })),
  on(flagUser, (state, { id, flag }) => {
    // find the user by id and update the flagged property
    // generally, the flag should be set on the server and the updated user should be returned
    const updatedUsers = state.users.map((user: User) => user.id === id ? { ...user, flagged: flag } : user);
    return { ...state, users: updatedUsers}
  }),
  on(loadDataFromLocalStorage, (state) => {
    const localStorageState = localStorage.getItem('state');
    return localStorageState ? JSON.parse(localStorageState).users : state;
  }),
);

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state: State, action) {
    const localStorageState = localStorage.getItem('state');
    const initialState = localStorageState ? JSON.parse(localStorageState) : state;
    const nextState = reducer(initialState, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
}