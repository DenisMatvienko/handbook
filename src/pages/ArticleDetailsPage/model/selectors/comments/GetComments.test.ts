/**
 *    GetComments selector test
 */

import { StateSchema } from 'app/provider/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './GetComments';

describe('GetComments', () => {
  test('selector should return date of getArticleCommentsIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticleCommentsIsLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticleCommentsError', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      },
    };
    expect(getArticleCommentsError(state as StateSchema))
      .toEqual('error');
  });
  test('selector get empty data of getArticleCommentsError', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema))
      .toEqual(undefined);
  });
});
