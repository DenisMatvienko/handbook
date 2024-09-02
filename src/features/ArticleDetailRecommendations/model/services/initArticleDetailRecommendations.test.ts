/**
 *    fetchArticlesList test.
 */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import axios from 'axios';
import { MockedEntitiesGenerator } from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';
import {
  fetchArticleDetailRecommendations,
} from 'features/ArticleDetailRecommendations/model/services/fetchArticleDetailRecommendations';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
const recommendations = new MockedEntitiesGenerator().createRecommendationsMock(16);

describe('fetchArticleDetailRecommendations', () => {
  test('ok request fetchArticlesList', async () => {
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
