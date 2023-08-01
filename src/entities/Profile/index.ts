/**
 *  Profile entities PUBLIC API
 */

import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { Profile } from './model/type/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export {
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
};
