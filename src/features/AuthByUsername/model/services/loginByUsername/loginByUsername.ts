/**
 * createAsyncThunk, generic = Returned: User, ThunkArg: loginByUsername,
 * thunkAPIType: { rejectValue: string }
 *
 * Dispatch to be called 3 times:
 * 1 time called-When we are call action LoginByUsername
 * 2 time-When we are call dispatch with action setAuthData
 * 3 time-When action successfully fulfilled-it happen in return response.data
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface loginByUsername {
  username: string;
  password: string;
}

export const LoginByUsername = createAsyncThunk<User, loginByUsername, { rejectValue: string }>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
