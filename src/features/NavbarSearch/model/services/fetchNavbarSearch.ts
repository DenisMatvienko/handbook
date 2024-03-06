/**
 *    fetchNavbarSearch fetching.
 *      - Fetching list of articles, when searching;
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { getNavbarSearchArticleSelector } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { SearchableArticle } from 'features/NavbarSearch/model/types/searchableArticle';

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchNavbarSearch = createAsyncThunk<SearchableArticle[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'features/fetchNavbarSearch',
      async (props, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const search = getNavbarSearchArticleSelector(getState());

        try {
          const response = await extra.api.get<SearchableArticle[]>('/articles', {
            params: {
              _expand: 'user',
              q: search,
            },
          });

          console.log(response.data);

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
