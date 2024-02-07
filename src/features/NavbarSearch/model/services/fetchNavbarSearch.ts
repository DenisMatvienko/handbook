/**
 *    fetchNavbarSearch fetching.
 *      - Fetching list of articles, when searching;
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { getNavbarSearchSelector } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';

interface FetchArticleListProps {
    page?: number,
}

export const fetchNavbarSearch = createAsyncThunk<Article[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'features/fetchArticlesSearch',
      async (props, thunkAPI) => {
        const {
          page = 1,
        } = props;
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const search = getNavbarSearchSelector(getState());

        try {
          const response = await extra.api.get<Article[]>('/articles', {
            params: {
              _expand: 'user',
              q: search,
            },
          });

          if (!response.data) {
            throw new Error();
          }
          return response.data;
        } catch (e) {
          console.log(e);
          return rejectWithValue('error');
        }
      },
    );
