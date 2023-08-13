/**
 *  Profile entities PUBLIC API
 */

import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { Profile } from './model/type/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import {getProfileIsLoading} from './model/selectors/getProfileIsLoading/getProfileIsLoading';

export {
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
};
