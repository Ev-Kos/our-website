export type TUserRegister = {
  login: string;
  username: string;
  usersurname: string;
  usersecondname?: string;
  email: string;
  password: string;
  super_user?: boolean;
}