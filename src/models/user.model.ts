export interface IUserModel {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  verified?: boolean;

  save?: () => {};
}
