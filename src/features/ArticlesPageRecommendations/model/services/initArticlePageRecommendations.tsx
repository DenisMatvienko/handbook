/**
 *    initNavbarSearch fetching
 *      -
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
  fetchArticlePageRecommendations,
} from 'features/ArticlesPageRecommendations/model/services/fetchArticlePageRecommendations';
import {
  getArticlesPageRecommendationsInitedSelecor,
} from 'features/ArticlesPageRecommendations/model/selectors/getArticlesPageRecommendations';

export const initArticlePageRecommendations = createAsyncThunk<void,
  void,
  ThunkConfig<string>>(
    'articlePageRecommendations/initArticlePageRecommendations',
    async (_, thunkAPI) => {
      const {
        dispatch,
        getState,
      } = thunkAPI;

      const inited = getArticlesPageRecommendationsInitedSelecor(getState());

      if (!inited) {
        dispatch(fetchArticlePageRecommendations({}));
      }
    },
  );
