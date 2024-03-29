/**
 * - Profile reducers:
 *   - fetchProfileData return responses data's. Here in Profile reducers in extraReducers, we are
 *     get this data's and in fulfilled appropriate/assign in state (state.data = action.payload)
 *
 *  @param PayloadAction<Profile>
 *    - Because the backend returns user profile data, not the entire schema
 *
 *  @param setReadonly
 *    - Using for editing or cancel editing profile
 *
 *  @param updateProfile
 *    - Using for update inputs in profile, when is readonly of ready to edit
 *      ...state.data - old data
 *      ...state.payload - new data
 *      - if some field in inputs will update old data change on new data in inputs
 *
 *  @param canselEdit
 *      - Cansel btn logic.
 *      ...state.data - old data
 *      ...state.form - newest data
 *      Will always return from 'newest data' to 'default data', when will push cansel btn
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  updateProfileData,
} from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../type/profile';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = undefined;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state, action) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = false;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
