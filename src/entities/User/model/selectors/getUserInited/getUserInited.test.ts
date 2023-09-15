import { StateSchema } from 'app/provider/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited', () => {
  test('selector should return false', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: false,
      },
    };
    expect(getUserInited(state as StateSchema)).toBe(false);
  });
  test('selector get true getUserInited', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
      },
    };
    expect(getUserInited(state as StateSchema)).toBe(true);
  });
});
