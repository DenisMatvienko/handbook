/**
 *    fetchNavbarSearch fetching.
 *      - Fetching list of articles, when searching;
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import {
  getArticlesPageRecommendationsLimitSelector,
  getArticlesPageRecommendationsPageSelector,
} from 'features/ArticlesPageRecommendations/model/selectors/getArticlesPageRecommendations';

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchArticlePageRecommendations = createAsyncThunk<Recommendation[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'features/fetchNavbarSearch',
      async (props, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const limit = getArticlesPageRecommendationsLimitSelector(getState());
        const page = getArticlesPageRecommendationsPageSelector(getState());

        try {
          const response = await extra.api.get<Recommendation[]>('/articles', {
            params: {
              _limit: limit,
              _page: page,
            },
          });

          if (!response.data) {
            throw new Error();
          }
          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
