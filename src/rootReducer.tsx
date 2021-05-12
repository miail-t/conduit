import { combineReducers } from '@reduxjs/toolkit';
import article from './redux/articleSlice';
import user from './redux/userSlice';
import profile from './redux/profileSlice'

const rootReducer = combineReducers({
  article,
  user,
  profile
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;