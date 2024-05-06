import { User, State } from './users.models';
import { selectUsers, usersSelector, selectSelectedId, selectUserById } from './users.selectors';

const users: User[] = [
  { 
    id: { value: '1' }, 
    name: { title: 'Mr', first: 'John', last: 'Doe' }, 
    flagged: false, 
    email: 'john.doe@email.com', 
    picture: { thumbnail: '' } 
  }
];

describe('Users Selectors', () => {
  const initialState: State = {
    users: {
      users,
      error: null,
      selectedId: '1',
    },
  };

  it('should select the list of users', () => {
    const result = selectUsers(initialState);
    expect(result).toEqual(initialState.users.users);
  });

  it('should select the list of users via createSelector', () => {
    const result = usersSelector.projector(initialState.users.users);
    expect(result).toEqual(initialState.users.users);
  });

  it('should select the selectedId', () => {
    const result = selectSelectedId(initialState);
    expect(result).toEqual(initialState.users.selectedId);
  });

  it('should select the user by id', () => {
    const result = selectUserById.projector(initialState.users.users, initialState.users.selectedId);
    expect(result).toEqual(initialState.users.users[0]);
  });
});