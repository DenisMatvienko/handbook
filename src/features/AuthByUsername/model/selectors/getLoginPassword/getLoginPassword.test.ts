import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('selector should return passwod', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'admin',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('admin');
  });
  test('selector get empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
