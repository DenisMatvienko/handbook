import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('selector should return loading', () => {
  test('selector return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test('selector should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
