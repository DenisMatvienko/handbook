/**
 *    User public API
 */

import { userReducer, userActions } from './model/slice/UserSlice';
import { UserSchema, User } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
  userReducer,
  userActions,
  UserSchema,
  User,
  getUserAuthData,
  getUserInited,
};
