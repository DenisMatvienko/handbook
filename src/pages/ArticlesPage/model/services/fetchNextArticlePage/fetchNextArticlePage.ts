/**
 *    fetchNextArticlePage fetching
 *      -
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

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>>(
      'entity_name/fetchNextArticlePage',
      async (_, thunkAPI) => {
        const {
          dispatch,
          getState,
        } = thunkAPI;
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPageNum(getState());
        const hasMore = getArticlePageHasMore(getState());

        if (hasMore && !isLoading) {
          dispatch(articlePageSliceActions.setPage(page + 1));
          dispatch(fetchArticlesList({
            page: page + 1,
          }));
        }
      },
    );
