/**
 *    fetchArticlesList test.
 */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import axios from 'axios';
import {
  fetchArticlePageRecommendations,
} from 'features/recommendations/ArticlesPageRecommendations/model/services/fetchArticlePageRecommendations';
import { MockedEntitiesGenerator } from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
const recommendations = new MockedEntitiesGenerator().createRecommendationsMock(16);

describe('fetchArticlePageRecommendations', () => {
  test('ok request fetchArticlePageRecommendations', async () => {
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

    const thunk = new TestAsyncThunk(fetchArticlePageRecommendations, stateMock);
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
    const thunk = new TestAsyncThunk(fetchArticlePageRecommendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({});

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
