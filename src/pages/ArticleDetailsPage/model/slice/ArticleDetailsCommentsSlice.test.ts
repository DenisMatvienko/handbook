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
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Comment } from 'entities/Comment';
import { MockNormalizedDataGenerator } from 'shared/lib/tests/MockDataGenerator/MockNormalizedDataGenerator';
import { mockedComment } from 'shared/lib/tests/MockDataGenerator/MockedData/MockedData';
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';

const generateEntitiesComments = new MockNormalizedDataGenerator().createUniversalDataMock(16, mockedComment);
const comment = new MockedEntitiesGenerator().createCommentMock(16);

describe('ArticleDetailsCommentsSlice', () => {
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
        ids: new Array(16).fill(0).map((_, i) => String(i)),
        entities: generateEntitiesComments,
      });
  });

  test('fetchCommentsByArticleId service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
    };
    expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.fulfilled(comment, '', '1'),
    ))
      .toEqual({
        isLoading: false,
        ids: ['1', '2'],
        entities: {
          1: {
            id: '1',
            user: {
              id: '1',
              username: 'DenisCyberTerminator4100',
              avatar: '123',
            },
            text: 'ban',
          },
          2: {
            id: '2',
            user: {
              id: '2',
              username: 'Zubenko Mikhail Petrovich aka Mafioziy',
              avatar: '321',
            },
            text: 'sorry',
          },
        },
      });
  });
});
