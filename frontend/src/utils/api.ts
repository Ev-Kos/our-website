import { TUserRegister } from "../services/types/data";

const baseUrl = 'http://localhost:3007/';

const checkResponse = <T> (res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUserRegister = (
  login: string,
  username: string,
  usersurname: string,
  usersecondname: string,
  email: string,
  password: string,
  super_user: boolean
  ) => {
  return fetch(`${baseUrl}auth/register`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'},
      body: JSON.stringify({
          login: login,
          username: username,
          usersurname: usersurname,
          usersecondname: usersecondname,
          email: email,
          password: password,
          super_user: super_user
      })
  })
  .then((res) => checkResponse<TUserRegister>(res))
}

export const getUserLogin = (userEmail: string, userPassword: string) => {
  return fetch(`${baseUrl}signin`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'},
      body: JSON.stringify({
          'email': userEmail,
          'password': userPassword
      })
  })
  .then((res) => checkResponse<TUserRegister>(res))
}

// export const userLogout = (token: string) => {
//   return fetch(`${baseUrl}auth/logout`, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'token': token
//       })
//   })
//   .then((res) => checkResponse<TUserLogout>(res))
// }