import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('selector should return readonly', () => {
  test('selector return Readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema))
      .toEqual(true);
  });
  test('selector should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema))
      .toEqual(undefined);
  });
});
