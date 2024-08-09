/**
 *    fetchArticlesList test.
 */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import axios from 'axios';
import { Recommendation, RecommendationType } from 'entities/Recommendation/model/types/recommendation';
import {
  fetchArticleDetailRecommendations,
} from 'features/ArticleDetailRecommendations/model/services/fetchArticleDetailRecommendations';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchArticleDetailRecommendations', () => {
  test('ok request fetchArticlesList', async () => {
    const recommendation: Recommendation = {
      id: '1',
      articleId: '1',
      title: 'hello',
      subtitle: 'subtitle',
      img: 'path/to/img',
      views: 21,
      createdAt: '21.10.15',
      type: [RecommendationType.IT],
      user: {
        id: '1',
        username: 'den',
        avatar: 'sadsad',
      },
      article: {
        id: '1',
        title: '2',
        subtitle: '21',
        img: 'string',
        views: 21,
        createdAt: '21',
        user: {
          id: '1',
          username: 'den',
          avatar: 'sadsad',
        },
        type: [],
        blocks: [],
      },
    };

    const recommendations: Recommendation[] = new Array(16)
      .fill(0)
      .map((item, index) => (
        {
          ...recommendation,
          id: String(index + 1),
          articleId: String(index + 1),
        }
      ));

    const stateMock = {
      articleDetailRecommendations: {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        limit: 5,
        _inited: false,
      },
    };

    const thunk = new TestAsyncThunk(fetchArticleDetailRecommendations, stateMock);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: recommendations }));

    const result = await thunk.callThunk({});

    expect(thunk.api.get)
      .toHaveBeenCalled();
    expect(result.meta.requestStatus)
      .toBe('fulfilled');
    expect(result.payload)
      .toEqual(recommendations);
  });

  test('server fall with error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailRecommendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({});

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
