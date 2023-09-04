/**
 * - TestAsyncThunk - Filler class (placeholder class or dummy class) - for reusing
 *   test's by this filler class with same types which using in LoginByUsername, createAsyncThunk
 *
 *   @param Type 'ActionCreatorType' imitate 'createAsyncThunk' generic type in loginByUsername:
 *   represent as function, which have arg, and return asyncThunkAction
 *
 *   @param Type 'ActionCreatorType' path of generics:
 *   ActionCreatorType -> createAsyncThunk -> AsyncThunk<Returned, ThunkArg, ThunkApiConfig>
 *    -> which eq to AsyncThunkActionCreator<Returned, ThunkArg, ThunkApiConfig>
 *    -> finally get arg which we are made:
 *      (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>
 *
 *   @param callThunk():
 *    actionCreator(LoginByUsername) - is createAsyncThunk function - which create async thunk(action);
 *    result = action() - after that we are call this action and add into 'result' var;
 *
 * - for check types and args of action use: action(dispatch, getState, undefined);
 *    'result' will be (just if func async (if static it will be Promise)):
 *    {
 *      type: 'login/loginByUsername/fulfilled',
 *      payload: { id: '1', username: 'admin' },
 *      meta: {
 *        arg: { username: 'admin', password: 'admin' },
 *        requestId: 'sTngQU293v4zIII-14dUR',
 *        requestStatus: 'fulfilled'
 *    }
 *
 *    @mock api, navigate
 *      Before was mocked axios (and dispatch, getState etc..), but now, in loginByUsername using not
 *      an axios, now using ThunkAPI.extra arg. 'extra' and 'navigate' should be mocked
 *      api: MockedFunctionDeep - is type getting from loginByUsername -> mockedAxios const
 *      navigate: just mocked jest function
 */

import { StateSchema } from 'app/provider/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Returned, Arg, RejectedValue> = (arg: Arg) =>
  AsyncThunkAction<Returned, Arg, {rejectValue: RejectedValue}>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    );

    return result;
  }
}
