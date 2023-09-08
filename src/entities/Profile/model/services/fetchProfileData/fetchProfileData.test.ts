/**
 *    Test fetchProfileData service.
 *
 *    @test 'ok request, success status, correct data'.
 *      - Expect that get request is ok;
 *      - Expect that get request is ok - with fulfilled status;
 *      - Expect that server data response as payload - 'data';
 *
 *    @test 'server fall with error'.
 *      - Expect that get request is fall - with reject status
 */

import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchProfileData', () => {
  test('ok request, success status, correct data', async () => {
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
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get)
      .toHaveBeenCalled(); // Expect that get request is ok
    expect(result.meta.requestStatus)
      .toBe('fulfilled'); // Expect that get request is ok - with fulfilled status
    expect(result.payload)
      .toEqual(data); // Expect that server data response as payload - 'data'
  });
  test('server fall with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
