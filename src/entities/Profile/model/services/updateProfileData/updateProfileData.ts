/**
 *    Update Profile data
 *      - return updates users changes to server;
 *
 *    @param formData
 *      - getProfileData selector.
 *        In components using useSelector.
 *        But into async thunk using getState()
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../type/profile';

export const updateProfileData = createAsyncThunk<Profile,
  void,
  ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkAPI;

      const formData = getProfileForm(getState());

      try {
        const response = await extra.api.put<Profile>('/profile', formData);
        console.log(response.data);
        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },
  );
