/**
 *  Profile entities PUBLIC API
 */

import { Profile } from './model/type/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export {
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
};
