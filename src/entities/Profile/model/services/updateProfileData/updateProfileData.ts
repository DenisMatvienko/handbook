/**
 *    Update Profile data;
 *      - return updates users changes to server.
 *
 *    2 variants to update data:
 *      @param string
 *          - in args get string with id, and add in axios as like this: `/profile/${profileId}`.
 *
 *      @param void
 *          - skip args, and get formData selector. from formData add into axios profile ids, as like this:
 *          `/profile/${formData.id}`
 *
 *    @param formData;
 *      - getProfileData selector.
 *        In components using useSelector.
 *        But into async thunk using getState().
 *
 *    @param ValidateProfileData;
 *      -  If in array of errors by ValidateProfileData, contain error.
 *         do rejectWithValue - of this error code.
 *      -  Block of 'try and catch' handle server errors, in that rejectWithValue put
 *         server error code.
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { ValidateProfileData } from '../validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../type/profile';

export const updateProfileData = createAsyncThunk<Profile,
    string,
    ThunkConfig<ValidateProfileError[]>>(
      'profile/updateProfileData',
      async (profileId, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const formData = getProfileForm(getState());
        const errors = ValidateProfileData(formData);

        if (errors.length) {
          return rejectWithValue(errors);
        }

        try {
          const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
      },
    );
