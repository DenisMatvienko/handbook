/**
 *    Test fetchCommentsByArticleId service.
 *
 *    @test 'ok request, success status, correct data'.
 *      - Expect that get request is ok;
 *      - Expect that get request is ok - with fulfilled status;
 *      - Expect that server data response as payload - 'data';
 *
 *    @test 'server fall with error'.
 *      - Expect that get request is fall - with reject status
 */

import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchCommentsByArticleId', () => {
  test('ok request, success status, correct data', async () => {
    const comment: Comment = {
      id: '1',
      user: {
        id: '1',
        username: 'DenisCyberTerminator4100',
        avatar: '123',
      },
      text: 'ban',
    };
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comment }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get)
      .toHaveBeenCalled();
    expect(result.meta.requestStatus)
      .toBe('fulfilled');
    expect(result.payload)
      .toEqual(comment);
  });
  test('server fall with error', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
