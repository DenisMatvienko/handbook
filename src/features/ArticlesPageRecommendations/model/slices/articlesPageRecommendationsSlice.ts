/**
 *      - ArticlesPageRecommendationsSlice createEntityAdapter slice;
 *        See more: https://redux-toolkit.js.org/api/createEntityAdapter;
 */

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import {
  fetchArticlePageRecommendations,
} from '../services/fetchArticlePageRecommendations';
import {
  ArticlesPageRecommendationsSchema,
} from '../types/articlesPageRecommendationsSchema';

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
    limit: 5,
    _inited: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlePageRecommendations.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          recommendationAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlePageRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        recommendationAdapter.addMany(state, action.payload);

        if (action.meta.arg.replace) {
          recommendationAdapter.setAll(state, action.payload);
        } else {
          recommendationAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlePageRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageRecommendationsActions } = articlesPageRecommendationsSlice;
export const { reducer: articlesPageRecommendationsReducer } = articlesPageRecommendationsSlice;
