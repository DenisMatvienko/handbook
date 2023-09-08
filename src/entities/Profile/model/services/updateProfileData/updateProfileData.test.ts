/**
 *    Test updateProfileData service.
 *
 *    @test 'ok request, success status, correct data'.
 *      - Expect that get request is ok;
 *      - Expect that get request is ok - with fulfilled status;
 *      - Expect that server data response as payload - 'data';
 *
 *    @test 'server fall with error'.
 *      - Expect that get request is fall - with reject status;
 *
 *    @test 'put-request, error with validation'.
 *      - When put request fall;
 *
 *    @test 'wrong data update in field'.
 *      - When user input wrong data into fields when update moment;
 */

import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data = {
  profileId: 1,
  firstName: 'den',
  lastName: 'matvienko',
  age: 28,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'SpB',
  username: 'admin',
  avatar: './',
};

describe('updateProfileData', () => {
  test('ok request, success status, correct data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put)
      .toHaveBeenCalled(); // Expect that get request is ok
    expect(result.meta.requestStatus)
      .toBe('fulfilled'); // Expect that get request is ok - with fulfilled status
    expect(result.payload)
      .toEqual(data); // Expect that server data response as payload - 'data'
  });

  test('server fall with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus)
      .toEqual('rejected');
  });

  test('put-request, error with validation', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.payload)
      .toEqual([
        ValidateProfileError.SERVER_ERROR,
      ]);
  });

  test('wrong data update in field', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          firstName: '',
          lastName: '',
        },
      },
    });
    const result = await thunk.callThunk();

    expect(result.payload)
      .toEqual([
        ValidateProfileError.INCORRECT_USER_FIRSTNAME_LENGTH,
        ValidateProfileError.INCORRECT_USER_LASTNAME_LENGTH,
        ValidateProfileError.INCORRECT_USER_DATA,
      ]);
  });
});
