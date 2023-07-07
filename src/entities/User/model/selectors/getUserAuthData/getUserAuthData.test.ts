import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('selector should return auth date', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ id: '1', username: 'admin' });
  });
  test('selector get empty authData', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: undefined,
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
