/**
 *    initArticlePage test.
 *
 *    @test 'enter_test_name'
 *      - enter describe
 */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticleList/fetchArticlesList');

describe('initArticlePage', () => {
  test('ok request, success status, correct data', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
  });
  // test('server fall with error', async () => {
  // });
});
