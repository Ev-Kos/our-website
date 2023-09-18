import { USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  TLoginActions
} from '../actions/loginActions';
import { TUserLogin } from '../types/data';

type TInitialState = {
  userLoginRequest: boolean;
  userLoginSuccess: boolean;
  userLoginFailed: boolean;
  userAuth: boolean;
  userAuthProfile: TUserLogin;
  user: TUserLogin
}

export const initialState: TInitialState = {
  userLoginRequest: false,
  userLoginSuccess: false,
  userLoginFailed: false,
  userAuth: false,
  userAuthProfile: { login: '', password: '' },
  user: { login: '', password: '' }
}

export const loginReducer = (
  state = initialState,
  action: TLoginActions
  ): TInitialState => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:{
      return {
        ...state,
        userLoginRequest: true,
        userAuth: false
      }
    }
    case USER_LOGIN_SUCCESS: {
      const { userLogin, userPassword } = action.payload;
      return {
        ...state,
        userLoginRequest: false,
        userLoginSuccess: true,
        userAuth: true,
        userAuthProfile: {
          ...state.user,
          login: userLogin,
          password: userPassword
        }
      }
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        userLoginRequest: false,
        userLoginFailed: true,
        userAuth: false
      }
    }
    default: {
      return state;
    }
  }
}