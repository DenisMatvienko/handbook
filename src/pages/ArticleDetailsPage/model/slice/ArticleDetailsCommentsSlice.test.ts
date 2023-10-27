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

const comment: Comment[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'DenisCyberTerminator4100',
      avatar: '123',
    },
    text: 'ban',
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'Zubenko Mikhail Petrovich aka Mafioziy',
      avatar: '321',
    },
    text: 'sorry',
  },
];

describe('ArticleDetailsCommentsSlice', () => {
  test('fetchCommentsByArticleId service pending state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
    ))
      .toEqual({
        isLoading: true,
        error: undefined,
      });
  });

  test('fetchCommentsByArticleId service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
    };
    expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.fulfilled(comment, '', ''),
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
