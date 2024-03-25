/**
 *    fetchNavbarSearch fetching.
 *      - Fetching list of articles, when searching;
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { getNavbarSearchArticleSelector } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { Search } from 'entities/Search/model/types/search';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { getArticlePageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchNavbarSearch = createAsyncThunk<Search[],
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
        const limit = getArticlePageLimit(getState());

        try {
          addQueryParams({
            search,
          });
          const response = await extra.api.get<Search[]>('/articles', {
            params: {
              q: search,
              _limit: limit,
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
