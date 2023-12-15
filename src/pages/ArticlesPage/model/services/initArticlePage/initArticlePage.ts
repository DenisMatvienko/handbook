/**
 *    initArticlePage fetching
 *      -
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getArticlePageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlePageSliceActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
      'pages/initArticlePage',
      async (_, thunkAPI) => {
        const {
          dispatch,
          getState,
        } = thunkAPI;

        const inited = getArticlePageInited(getState());

        if (!inited) {
          dispatch(articlePageSliceActions.initView());
          dispatch(fetchArticlesList({
            page: 1,
          }));
        }
      },
    );
