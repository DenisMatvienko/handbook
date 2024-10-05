/**
 *  - Login reducers:
 *      Log in system by reducers on this slice;
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LoginByUsername,
} from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action:PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action:PayloadAction<string>) => {
      state.password = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(LoginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(LoginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(LoginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = LoginSlice;
export const { reducer: loginReducer } = LoginSlice;
