export interface State {
  users: UsersState; 
}

export interface UsersState {
  users: User[];
  selectedId: string
  error: any;
}

export interface User {
  id: { value: string };
  flagged: boolean;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string }
}

export interface FlagUserPayload {
  id: string;
  flag: boolean;
  to: string;
  from: string;
}