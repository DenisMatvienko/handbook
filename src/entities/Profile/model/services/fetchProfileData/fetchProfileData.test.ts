import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchProfileData', () => {
  test('get profile response from server', async () => {
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
      .toEqual(data); // Expect that server data response is 'data'
  });
  test('server forbidden', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
