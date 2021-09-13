import { combineReducers } from '@reduxjs/toolkit';
import article from './redux/articleSlice';
import user from './redux/userSlice';


const rootReducer = combineReducers({
  article,
  user
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;