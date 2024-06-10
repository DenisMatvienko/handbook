/**
 *    fetchNextArticlePage test.
 *
 *    @test 'ok request, success status, correct data';
 *      - toBeCalledTimes - 4 times: pending, fulfilled + 2 dispatch from fetchNextArticlePage.
 *
 *    @test 'error';
 *      - toBeCalledTimes - 2 times cause fetchNextArticlePage arg hasMore - false:
 *        according this, requirement with hasMore didn't work, 2 dispatch didn't called.
 *        return 2 (pending, fulfilled or pending, error) Instead of 4 (pending, fulfilled + 2 dispatch).
 */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import { fetchNextArticlePage } from './fetchNextArticlePage';

jest.mock('../fetchArticleList/fetchArticlesList');

describe('fetchNextArticlePage', () => {
  test('ok request, success status, correct data', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 3,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalledWith();
  });
  test('isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalledWith();
  });
});
