/**
 *    getProfileError
 *      - testing get 'error' field from profileSchema - selector;
 */

import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('selector should return form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };
    expect(getProfileError(state as StateSchema))
      .toEqual('error');
  });
  test('selector get empty data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema))
      .toEqual(undefined);
  });
});
