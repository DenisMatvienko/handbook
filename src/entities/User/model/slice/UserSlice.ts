/**
 * - Auth reducers:
 *   Save your login in service, by localStorage
 *
 * @param setAuthData
 *  Set action in state, set data in localStorage;
 *
 *  when user add login and password data, this data's saving in local-storage
 *  in loginByUsername
 *
 * @param initAuthData
 *  Check data in localStorage, if true parse data from storage into state;
 *
 *  page reload or something, we are check:
 *  we have in local storage data's which we are set in setAuthData
 *  if true we are set this data in authData state
 *  Mounting/dispatching of this logic done in the App component
 *
 * @param logout
 *  Remove item from localStorage
 *  exit from user Account
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {
  _inited: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action:PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
