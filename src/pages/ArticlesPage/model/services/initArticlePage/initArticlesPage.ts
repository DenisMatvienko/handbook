/**
 *    initArticlePage fetching
 *      -
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { articlePageSliceActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticleList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void,
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
