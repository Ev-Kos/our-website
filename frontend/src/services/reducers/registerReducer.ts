import { USER_REGISTER_SUCCESS,
         USER_REGISTER_REQUEST,
         USER_REGISTER_FAILED,
         TUserRegisterActions }
       from '../actions/registrationActions';
import { TUserRegister } from '../types/data';

type TInitialState = {
    registrationSuccess: boolean;
    registrationRequest: boolean;
    registrationFailed: boolean;
    newUserProfile: TUserRegister | null;
}

const initialState: TInitialState = {
    registrationSuccess: false,
    registrationRequest: false,
    registrationFailed: false,
    newUserProfile: null
}

export const registerReducer = (
  state = initialState,
  action: TUserRegisterActions) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        registrationRequest: true
      }
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
        registrationSuccess: true,
        newUserProfile: {
          login: action.data.login,
          username: action.data.username,
          usersurname: action.data.usersurname,
          usersecondname: action.data.usersecondname,
          email: action.data.email,
          password: action.data.password,
          super_user: action.data.super_user
        }
      }
    }
    case USER_REGISTER_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true
      }
    }
    default: {
      return state;
    }
  }
}