/**
 *    initNavbarSearch fetching
 *      -
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
  fetchArticlePageRecommendations,
} from 'features/recommendations/ArticlesPageRecommendations/model/services/fetchArticlePageRecommendations';
import {
  getArticleDetailRecommendationsInitedSelecor,
} from 'features/recommendations/ArticleDetailRecommendations/model/selectors/getArticleDetailRecommendations';

export const initArticleDetailRecommendations = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
      'articleDetailRecommendations/initArticleDetailRecommendations',
      async (_, thunkAPI) => {
        const {
          dispatch,
          getState,
        } = thunkAPI;

        const init = getArticleDetailRecommendationsInitedSelecor(getState());

        if (!init) {
          dispatch(fetchArticlePageRecommendations({}));
        }
      },
    );
