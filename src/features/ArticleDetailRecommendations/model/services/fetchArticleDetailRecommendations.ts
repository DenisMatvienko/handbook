/**
 *  article detail recommendations query's
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';
import {
  getArticleDetailRecommendationsLimitSelector,
} from 'features/ArticleDetailRecommendations/model/selectors/getArticleDetailRecommendations';

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchArticleDetailRecommendations = createAsyncThunk<Recommendation[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'features/fetchArticleDetailRecommendations',
      async (props, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const limit = getArticleDetailRecommendationsLimitSelector(getState());

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
