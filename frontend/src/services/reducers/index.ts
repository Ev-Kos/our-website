import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';

export const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
})