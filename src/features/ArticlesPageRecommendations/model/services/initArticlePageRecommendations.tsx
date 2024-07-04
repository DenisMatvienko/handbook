/**
 *    initNavbarSearch fetching
 *      -
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
  fetchArticlePageRecommendations,
} from 'features/ArticlesPageRecommendations/model/services/fetchArticlePageRecommendations';
import { getArticlePageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const initArticlePageRecommendations = createAsyncThunk<void,
  void,
  ThunkConfig<string>>(
    'articlePageRecommendations/initArticlePageRecommendations',
    async (_, thunkAPI) => {
      const {
        dispatch,
        getState,
      } = thunkAPI;

      const initedArticles = getArticlePageInited(getState());

      // if (initedArticles) {
      //   dispatch(fetchArticlePageRecommendations({}));
      // }
    },
  );
