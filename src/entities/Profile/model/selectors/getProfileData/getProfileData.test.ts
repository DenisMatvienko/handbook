/**
 *    getProfileDate
 *      - testing get 'date' field from profileSchema - selector;
 */

import { StateSchema } from 'app/provider/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('selector should return date', () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema))
      .toEqual(data);
  });
  test('selector get empty data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema))
      .toEqual(undefined);
  });
});
