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