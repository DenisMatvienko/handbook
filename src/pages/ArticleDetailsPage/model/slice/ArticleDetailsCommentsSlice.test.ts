/**
 *    ArticleDetailsCommentsSlice test.
 *      - Test reducers and extraReducers of ArticleDetailsCommentsSlice.
 *
 *    @test 'fetchCommentsByArticleId service pending state in extraReducer';
 *       Test of pending state. from fetchArticleById service.
 *       - in time of pending isLoading change on - true.
 *
 *    @test 'fetchCommentsByArticleId service fulfilled state in extraReducer';
 *      Test in time, when response successfully returned, after loading/pending.
 *
 */

import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import {
  articleDetailsCommentsActions,
  articleDetailsCommentsReducer,
} from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Comment } from 'entities/Comment';
import { MockNormalizedDataGenerator } from 'shared/lib/tests/MockDataGenerator/MockNormalizedDataGenerator';
import { mockedComment } from 'shared/lib/tests/MockDataGenerator/MockedData/MockedData';
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { articlePageSliceActions, articlePageSliceReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { ArticleView } from 'entities/Article';

const generateEntitiesComments = new MockNormalizedDataGenerator().createUniversalDataMock(16, mockedComment);
const comment = new MockedEntitiesGenerator().createCommentMock(16);

describe('ArticleDetailsCommentsSlice', () => {
  test('setCommentPage reducer test', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      limit: 5,
      hasMore: true,
      page: 1,
    };
    expect(articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        articleDetailsCommentsActions.setCommentPage(2),
    ))
      .toEqual({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: true,
        page: 2,
      });
  });

  test('resetCommentPage reducer test', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      limit: 5,
      hasMore: true,
      page: 5,
    };
    expect(articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        articleDetailsCommentsActions.resetCommentPage(),
    ))
      .toEqual({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: true,
        page: 1,
      });
  });

  test('fetchCommentsByArticleId service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: undefined,
      hasMore: false,
      ids: new Array(16).fill(0).map((_, i) => String(i)),
      entities: generateEntitiesComments,
    };
    expect(articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(comment, '', ''),
    ))
      .toEqual({
        isLoading: false,
        error: undefined,
        hasMore: false,
        ids: new Array(16).fill(0).map((_, i) => String(i)),
        entities: generateEntitiesComments,
      });
  });

  test('fetchCommentsByArticleId service pending state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined,
      ids: new Array(16).fill(0).map((_, i) => String(i)),
      entities: generateEntitiesComments,
    };
    expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
    ))
      .toEqual({
        isLoading: true,
        error: undefined,
        ids: [],
        entities: {},
      });
  });
});
