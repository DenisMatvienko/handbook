/**
 *    AddCommentFormSelectors selector test
 */

import { StateSchema } from 'app/provider/StoreProvider';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from './addCommentFormSelectors';

describe('GetComments', () => {
  test('selector should return date of getAddCommentFormText', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'hello',
      },
    };
    expect(getAddCommentFormText(state as StateSchema))
      .toEqual('hello');
  });
  test('selector get empty data of getAddCommentFormText', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema))
      .toEqual('');
  });
  test('selector should return date of getAddCommentFormError', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };
    expect(getAddCommentFormError(state as StateSchema))
      .toEqual('error');
  });
  test('selector get empty data of getAddCommentFormError', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema))
      .toEqual(undefined);
  });
});
