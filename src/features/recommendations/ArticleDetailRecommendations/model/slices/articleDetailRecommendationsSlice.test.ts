/**
 *    Detail Recommendations test
 *
 */

import { MockNormalizedDataGenerator } from 'shared/lib/tests/MockDataGenerator/MockNormalizedDataGenerator';
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';
import {
  ArticleDetailRecommendationsSchema,
} from 'features/recommendations/ArticleDetailRecommendations/model/types/articleDetailRecommendationsSchema';
import {
  articleDetailRecommendationsReducer,
} from 'features/recommendations/ArticleDetailRecommendations/model/slices/articleDetailRecommendationsSlice';
import {
  fetchArticleDetailRecommendations,
} from 'features/recommendations/ArticleDetailRecommendations/model/services/fetchArticleDetailRecommendations';

describe('articlePageSlice', () => {
  const generatedRecommendationMock = new MockedEntitiesGenerator().createRecommendationsMock(16);
  const generatedNormalizedMock = new MockNormalizedDataGenerator().createNormalizedRecommendationMock(16);

  test('fetchArticleDetailRecommendations service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailRecommendationsSchema> = {
      isLoading: true,
      hasMore: false,
      ids: new Array(16).fill(0).map((_, i) => String(i)),
      entities: generatedNormalizedMock,
    };

    expect(articleDetailRecommendationsReducer(
            state as ArticleDetailRecommendationsSchema,
            fetchArticleDetailRecommendations.fulfilled(generatedRecommendationMock, '', {}),
    ))
      .toEqual({
        hasMore: false,
        isLoading: false,
        _inited: true,
        ids: new Array(16).fill(0).map((_, i) => String(i)),
        entities: generatedNormalizedMock,
      });
  });
  test('fetchArticleDetailRecommendations service pending state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailRecommendationsSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(articleDetailRecommendationsReducer(
            state as ArticleDetailRecommendationsSchema,
            fetchArticleDetailRecommendations.pending('hello', { replace: true }, {}),
    ))
      .toEqual({
        isLoading: true,
        error: undefined,
        ids: [],
        entities: {},
      });
  });
});
