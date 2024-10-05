/**
 *  @param createAsyncThunkArgs(generic):
 *    @return User,
 *    @thunkArg: loginByUsername,
 *    @ThunkConfig: thunkAPI type
 *      - replaced on ThunkConfig see more: StateSchema-ThunkConfig
 *      - 3-th arg, get some config: { rejectValue: string, extra: ThunkExtraArg }
 *        also include: extra, dispatch, rejectWithValue
 *
 *  @method extra.navigate
 *    - If you need to do something after event (ex: after auth you need to redirect into '/profile')
 *
 *  @note Dispatch to be called 3 times:
 *    - 1 time called-When we are call action LoginByUsername
 *    - 2 time-When we are call dispatch with action setAuthData
 *    - 3 time-When action successfully fulfilled-it happen in return response.data
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig, ThunkExtraArg } from 'app/provider/StoreProvider';

interface loginByUsername {
  username: string;
  password: string;
}

export const LoginByUsername = createAsyncThunk<
  User,
  loginByUsername,
  ThunkConfig<string>
  >(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
    /**
     * destruct thunkAPI
     */
      const { extra, dispatch, rejectWithValue } = thunkAPI;

      try {
        const response = await thunkAPI.extra.api.post<User>('/login', {
          username,
          password,
        });

        if (!response.data) {
          throw new Error();
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));
        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
