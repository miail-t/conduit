import { combineReducers } from '@reduxjs/toolkit';
import article from './redux/articleSlice';
import user from './redux/userSlice';
import profile from './redux/profileSlice'
import notifications from './redux/notificationsSlice'

const rootReducer = combineReducers({
  article,
  user,
  profile,
  notifications
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;