import { store } from '../store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TUserRegisterActions } from '../actions/registrationActions';
import { TLoginActions } from '../actions/loginActions';

type TApplicationActions =
  | TUserRegisterActions
  | TLoginActions
  ;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;