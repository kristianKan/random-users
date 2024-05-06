export interface User {
  id: { value: string };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string }
}