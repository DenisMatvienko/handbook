import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('selector should return loading', () => {
  test('selector return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema))
      .toEqual(true);
  });
  test('selector should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema))
      .toEqual(undefined);
  });
});
