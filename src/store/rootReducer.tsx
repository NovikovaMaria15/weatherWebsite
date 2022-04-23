import { combineReducers } from 'redux';
import userWeaterSlise from './userWeater/userWeaterSlise';

const rootReducer = combineReducers({
  userWeater: userWeaterSlise.reducer,
});

export default rootReducer;
