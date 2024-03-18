/**
 *    initArticlePage fetching
 *          - If data's not inited: inited and load data from server;
 *          - Otherwise, there is no need to do this, because the data has already been loaded and inited
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { SortOrderType } from 'shared/types/sortOrder/sortOrderType';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { navbarSearchActions } from 'features/NavbarSearch/model/slices/navbarSearchSlice';
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

        const searchParams = new URLSearchParams(window.location.search);

        const inited = getArticlePageInited(getState());

        if (!inited) {
          const orderFromUrl = searchParams.get('order') as SortOrderType;
          const sortFromUrl = searchParams.get('sort') as ArticleSortField;
          const searchFromUrl = searchParams.get('search');

          if (orderFromUrl) {
            dispatch(articlePageSliceActions.setOrder(orderFromUrl));
          }

          if (sortFromUrl) {
            dispatch(articlePageSliceActions.setSort(sortFromUrl));
          }

          if (searchFromUrl) {
            dispatch(navbarSearchActions.setSearch(searchFromUrl));
          }
          dispatch(articlePageSliceActions.initView());
          dispatch(fetchArticlesList({}));
        }
      },
    );
