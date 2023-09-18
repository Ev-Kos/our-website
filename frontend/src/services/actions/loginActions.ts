import { getUserLogin } from '../../utils/api';
import { AppDispatch, AppThunk } from '../types/index';

export const USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST' = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS' = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED: 'USER_LOGIN_FAILED' = 'USER_LOGIN_FAILED';

export interface IUserLoginRequest {
  readonly type: typeof USER_LOGIN_REQUEST;
}

export interface IUserLoginSuccess {
  readonly type: typeof USER_LOGIN_SUCCESS;
  readonly payload: { userLogin: string; userPassword: string };
}

export interface IUserLoginFailed {
  readonly type: typeof USER_LOGIN_FAILED;
}

export type TLoginActions =
  | IUserLoginRequest
  | IUserLoginSuccess
  | IUserLoginFailed;

export const UserLoginRequest = (): IUserLoginRequest => ({
  type: USER_LOGIN_REQUEST
})

export const UserLoginSuccess = (payload: { userLogin: string; userPassword: string; }): IUserLoginSuccess => ({
  type: USER_LOGIN_SUCCESS,
  payload
})

export const UserLoginFailed = (): IUserLoginFailed => ({
  type: USER_LOGIN_FAILED
})

export const loginUser: AppThunk = (userLogin: string, userPassword: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(UserLoginRequest());
    getUserLogin(userLogin, userPassword)
    .then((data) => {
      if (data.access_token) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: { userLogin, userPassword }
        })
        sessionStorage.setItem('auth_token', data.access_token);
        return data

      }
    })
  .catch((err) => {
      dispatch(UserLoginFailed());
    });
  }
}