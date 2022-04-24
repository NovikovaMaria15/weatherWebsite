import { combineReducers } from '@reduxjs/toolkit';
import userWeaterSlise from './userWeater/userWeaterSlise';

const rootReducer = combineReducers({
  userWeater: userWeaterSlise.reducer,
});

export default rootReducer;
