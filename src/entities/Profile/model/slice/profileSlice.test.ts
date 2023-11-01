/**
 *    ProfileSlice test
 *      - Test reducers and extraReducers of profile
 *
 *    @test 'setReadonly reducer test'.
 *      - default field in state - false;
 *      - add to payload of setReadonly - true;
 *      - after that expect get true in readonly;
 *
 *    @test 'cancelEdit reducer test'
 *      When edit is cancel.
 *       - field 'username' didn't enter;
 *       - put cancel button;
 *       - field form saves with previous state 'data', and without validateErrors;
 *
 *    @test 'updateProfile reducer test'
 *      When enter in field new string and push button to update data.
 *        - enter data;
 *        - put button update;
 *        - data were update;
 *
 *    @test 'updateProfileData service pending state in extraReducer'
 *       Test of pending state. from updateProfileData service.
 *       - in time of pending isLoading change on - true
 *
 *    @test 'updateProfileData service fulfilled state in extraReducer'
 *      Test in time, when response successfully returned, after loading/pending
 *
 */

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData, ValidateProfileError } from 'entities/Profile';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../type/profile';

const InitialState: DeepPartial<ProfileSchema> = {};

const data = {
  firstName: 'den',
  lastName: 'matvienko',
  age: 28,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'SpB',
  username: 'admin',
  avatar: './',
};

describe('profileSlice', () => {
  test('setReadonly reducer test', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true),
    ))
      .toEqual({ readonly: true });
  });

  test('cancelEdit reducer test', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' },
    };
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
    ))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        data,
        form: data,
      });
  });

  test('updateProfile reducer test', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '' },
    };
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: 'denis-cyber-terminator41-00',
        }),
    ))
      .toEqual({
        form: { username: 'denis-cyber-terminator41-00' },
      });
  });

  test('updateProfileData service pending state in extraReducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
    ))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });

  test('updateProfileData service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '', ''),
    ))
      .toEqual({
        isLoading: false,
        data,
        form: data,
        readonly: false,
        validateErrors: undefined,
      });
  });
});
