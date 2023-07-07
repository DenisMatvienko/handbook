import { StateSchema } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('selector should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'selector return this error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('selector return this error');
  });

  test('selector should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
