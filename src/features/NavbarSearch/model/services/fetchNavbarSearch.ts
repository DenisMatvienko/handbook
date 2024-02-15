/**
 *    fetchNavbarSearch fetching.
 *      - Fetching list of articles, when searching;
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { getNavbarSearchArticleSelector } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchNavbarSearch = createAsyncThunk<Article[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'features/fetchArticlesSearch',
      async (props, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const search = getNavbarSearchArticleSelector(getState());

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
