export interface User {
  id: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}