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
 *       @param commentAdapter;
 *        - function for normalized state
 *          - setAll - add all comments (in that case). In fulfilled add by 1 arg: state, 2 arg: action data which need
 *          to add into state. commentAdapter will add it himself (add ids, himself normalize data, add entities)
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

import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';
import { StateSchema } from 'app/provider/StoreProvider';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
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
    ids: [],
    entities: {},
    limit: 5,
    hasMore: true,
    page: 1,
  }),
  reducers: {
    setCommentPage: (state, action: PayloadAction<number>) => {
      state.page = state.hasMore ? action.payload : 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        commentAdapter.removeAll(state);
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<Comment[]>,
      ) => {
        state.isLoading = false;
        commentAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length >= state.limit;
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
