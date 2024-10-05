/**
 *    Page Recommendations test
 */

import { MockNormalizedDataGenerator } from 'shared/lib/tests/MockDataGenerator/MockNormalizedDataGenerator';
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';
import {
  fetchArticlePageRecommendations,
} from 'features/recommendations/ArticlesPageRecommendations/model/services/fetchArticlePageRecommendations';
import {
  articlesPageRecommendationsReducer,
} from 'features/recommendations/ArticlesPageRecommendations/model/slices/articlesPageRecommendationsSlice';
import {
  ArticlesPageRecommendationsSchema,
} from 'features/recommendations/ArticlesPageRecommendations/model/types/articlesPageRecommendationsSchema';

describe('articlePageSlice', () => {
  const generatedRecommendationMock = new MockedEntitiesGenerator().createRecommendationsMock(16);
  const generatedNormalizedMock = new MockNormalizedDataGenerator().createNormalizedRecommendationMock(16);

  test('fetchArticlePageRecommendations service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ArticlesPageRecommendationsSchema> = {
      isLoading: true,
      hasMore: false,
      ids: new Array(16).fill(0).map((_, i) => String(i)),
      entities: generatedNormalizedMock,
    };

    expect(articlesPageRecommendationsReducer(
            state as ArticlesPageRecommendationsSchema,
            fetchArticlePageRecommendations.fulfilled(generatedRecommendationMock, '', {}),
    ))
      .toEqual({
        hasMore: false,
        isLoading: false,
        _inited: true,
        ids: new Array(16).fill(0).map((_, i) => String(i)),
        entities: generatedNormalizedMock,
      });
  });
  test('fetchArticlePageRecommendations service pending state in extraReducer', () => {
    const state: DeepPartial<ArticlesPageRecommendationsSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(articlesPageRecommendationsReducer(
            state as ArticlesPageRecommendationsSchema,
            fetchArticlePageRecommendations.pending('hello', { replace: true }, {}),
    ))
      .toEqual({
        isLoading: true,
        error: undefined,
        ids: [],
        entities: {},
      });
  });
});
