/**
 *      - ArticlesPageRecommendationsSlice createEntityAdapter slice;
 *        See more: https://redux-toolkit.js.org/api/createEntityAdapter;
 */

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import { fetchArticleDetailRecommendations } from '../services/fetchArticleDetailRecommendations';
import { ArticleDetailRecommendationsSchema } from '../types/articleDetailRecommendationsSchema';

const recommendationAdapter = createEntityAdapter<Recommendation>({
  selectId: (recommendation) => recommendation.id,
});

export const getArticleDetailRecommendations = recommendationAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPageRecommendations || recommendationAdapter.getInitialState(),
);

const articlesPageRecommendationsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: recommendationAdapter.getInitialState<ArticleDetailRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    limit: 5,
    _inited: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailRecommendations.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          recommendationAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleDetailRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        state._inited = true;
        recommendationAdapter.addMany(state, action.payload);

        if (action.meta.arg.replace) {
          recommendationAdapter.setAll(state, action.payload);
        } else {
          recommendationAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticleDetailRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailRecommendationsActions } = articlesPageRecommendationsSlice;
export const { reducer: articleDetailRecommendationsReducer } = articlesPageRecommendationsSlice;
