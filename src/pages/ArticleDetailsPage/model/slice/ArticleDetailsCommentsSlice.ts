/**
 *      - ArticleDetailsCommentsSlice createEntityAdapter slice;
 *        See more: https://redux-toolkit.js.org/api/createEntityAdapter;
 *
 *      @param selectId;
 *        - Assume IDs are stored in a field other than `comment.id`;
 *
 *      @param sortComparer;
 *        - Keep the "all IDs" array sorted based on comment titles;
 *
 *      @param reducers;
 *        - Can pass adapter functions directly as case reducers.  Because we're passing this
 *          as a value, `createSlice` will auto-generate the `bookAdded` action type / creator;
 *
 *      @param getInitialState();
 *        - function return default state by selector;
 *
 *      @param getArticleComments();
 *        - Can create a set of memoized selectors based on the location of this entity state;
 *
 *      @note when add selector in page - will get error:
 *      TS2739: Type 'StateSchema' is missing the following properties from type 'EntityState<Comment>': ids, entities
 *      Need add unique IDs of each item. Must be strings or numbers
 */

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';
import { StateSchema } from 'app/provider/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        text: 'comment 1',
        user: { id: '1', username: '1' },
      },
      2: {
        id: '2',
        text: 'comment 2',
        user: { id: '2', username: '2' },
      },
    },
  }),
  reducers: {},
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
