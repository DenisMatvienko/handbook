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
 */

import { StateSchema } from 'app/provider/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, Arg, RejectedValue> = (arg: Arg) =>
  AsyncThunkAction<Returned, Arg, {rejectValue: RejectedValue}>;

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
