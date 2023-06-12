// setAuthData - when user add login and password data, this data's saving in local-storage
// in loginByUsername
//
// initAuthData - page reload or something, we are check:
// we have in local storage data's which we are set in setAuthData
// if true we are set this data in authData state
// Mounting/dispatching of this logic done in the App component
//
// logout - exit from user Account

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action:PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state, action:PayloadAction<User>) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state, action:PayloadAction<User>) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
