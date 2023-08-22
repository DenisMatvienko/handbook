/**
 *  Profile entities PUBLIC API
 */

import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Profile } from './model/type/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { ProfileItem, ProfileData } from './model/items/items';

export {
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileForm,
  ProfileItem,
  ProfileData,
};
