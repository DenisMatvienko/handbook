/**
 * - set username, change state by action:
 *   Change state with value 'admin': {username: 'admin'} on value Den27, by setUsername actions
 *
 * - set password, change state by action:
 *   Change state with value 'admin': {password: 'admin'}, on value '0000', by setUsername actions
 */

import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from '../types/loginSchema';

const InitialState: DeepPartial<LoginSchema> = {
  username: 'admin',
  password: 'admin',
  isLoading: true,
  error: 'error',
};

describe('loginSlice', () => {
  test('set username, change state by action', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('Den27'),
    )).toEqual({ username: 'Den27' });
  });
  test('set password, change state by action', () => {
    const state: DeepPartial<LoginSchema> = { password: 'admin' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('0000'),
    )).toEqual({ password: '0000' });
  });
});
