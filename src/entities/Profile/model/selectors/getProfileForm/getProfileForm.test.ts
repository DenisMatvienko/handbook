/**
 *    getProfileDate
 *      - testing get 'date' field from profileSchema - selector;
 */

import { StateSchema } from 'app/provider/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('selector should return form', () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema))
      .toEqual(form);
  });
  test('selector get empty data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema))
      .toEqual(undefined);
  });
});
