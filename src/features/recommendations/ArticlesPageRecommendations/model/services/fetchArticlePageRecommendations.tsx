/**
 *    fetchNavbarSearch fetching.
 *      - Fetching list of articles, when searching;
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article/model/selectors/getArticleDetails';
import {
  getArticlesPageRecommendationsLimitSelector,
} from '../selectors/getArticlesPageRecommendations';

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchArticlePageRecommendations = createAsyncThunk<Recommendation[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'features/fetchArticlePageRecommendations',
      async (props, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const limit = getArticlesPageRecommendationsLimitSelector(getState());

        try {
          const response = await extra.api.get<Recommendation[]>('/recommendations', {
            params: {
              _limit: limit,
              _expand: ['article', 'user'],
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
