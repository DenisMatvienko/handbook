/**
 *      - ArticlesPageRecommendationsSlice createEntityAdapter slice;
 *        See more: https://redux-toolkit.js.org/api/createEntityAdapter;
 */

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import {
  ArticlesPageRecommendationsSchema,
} from 'features/ArticlesPageRecommendations/model/types/articlesPageRecommendationsSchema';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';

const recommendationAdapter = createEntityAdapter<Recommendation>({
  selectId: (comment) => comment.id,
});

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPageRecommendations || recommendationAdapter.getInitialState(),
);

const articlesPageRecommendationsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: recommendationAdapter.getInitialState<ArticlesPageRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(fetchCommentsByArticleId.pending, (state, action) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(fetchCommentsByArticleId.fulfilled, (
  //             state,
  //             action: PayloadAction<Comment[]>,
  //         ) => {
  //             state.isLoading = false;
  //             commentAdapter.setAll(state, action.payload);
  //         })
  //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: articlesPageRecommendationsActions } = articlesPageRecommendationsSlice;
export const { reducer: articlesPageRecommendationsReducer } = articlesPageRecommendationsSlice;
