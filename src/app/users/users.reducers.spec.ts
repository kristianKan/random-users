import { usersReducer, initialState } from './users.reducers';
import { loadDataSuccess, loadDataFailure, selectUser, flagUser } from './users.actions';
import { User } from './users.models';

const users: User[] = [
  { 
    id: { value: '1' }, 
    name: { title: 'Mr', first: 'John', last: 'Doe' }, 
    flagged: false, 
    email: 'john.doe@email.com', 
    picture: { thumbnail: '' } 
  }
];

describe('UsersReducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = usersReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should load users on loadDataSuccess action', () => {
    const action = loadDataSuccess({ users: { results: users } });
    const state = usersReducer(initialState, action);
    expect(state.users).toEqual(users);
  });

  it('should update error on loadDataFailure action', () => {
    const error = 'Error loading data';
    const action = loadDataFailure({ message: error });
    const state = usersReducer(initialState, action);
    expect(state.error).toEqual(error);
  });

  it('should update selectedId on selectUser action', () => {
    const id = '1';
    const action = selectUser(id);
    const state = usersReducer(initialState, action);
    expect(state.selectedId).toEqual(id);
  });

  it('should update flagged property of a user on flagUser action', () => {
    const id = '1';
    const flag = true;
    const to =''
    const from = ''
    const initialStateWithUsers = { ...initialState, users }
    const action = flagUser({ id, flag, to, from });
    const state = usersReducer(initialStateWithUsers, action);
    expect(state.users[0].flagged).toEqual(flag);
  });
});