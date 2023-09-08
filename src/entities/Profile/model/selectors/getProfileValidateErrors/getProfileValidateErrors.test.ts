import { StateSchema } from 'app/provider/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('selector should return loading', () => {
  test('selector return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USERNAME],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema))
      .toEqual(['SERVER_ERROR', 'INCORRECT_USERNAME']);
  });
  test('selector should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema))
      .toEqual(undefined);
  });
});
