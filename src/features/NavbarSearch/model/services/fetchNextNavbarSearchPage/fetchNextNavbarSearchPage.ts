/**
 *    fetchNextNavbarSearchPage fetching
 *      - fetching new page when triggered prepared element on event of fetchNextNavbarSearchPage
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlePageSliceActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import {
  fetchArticlesList,
} from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import {
  getNavbarHasMoreSelector,
  getNavbarIsLoadingSelector,
  getNavbarPageSelector,
} from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { fetchNavbarSearch } from 'features/NavbarSearch/model/services/fetchNavbarSearch/fetchNavbarSearch';
import { navbarSearchActions } from 'features/NavbarSearch/model/slices/navbarSearchSlice';

export const fetchNextNavbarSearchPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>>(
      'page/fetchNextNavbarSearchPage',
      async (_, thunkAPI) => {
        const {
          dispatch,
          getState,
        } = thunkAPI;

        const isLoading = getNavbarIsLoadingSelector(getState());
        const page = getNavbarPageSelector(getState());
        const hasMore = getNavbarHasMoreSelector(getState());

        if (hasMore && !isLoading) {
          dispatch(navbarSearchActions.setPage(page + 1));
          dispatch(fetchNavbarSearch({}));
        }
      },
    );
