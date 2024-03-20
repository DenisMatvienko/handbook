/**
 *    initArticlePage fetching
 *          - If data's not inited: inited and load data from server;
 *          - Otherwise, there is no need to do this, because the data has already been loaded and inited
 *
 *          @param searchParams;
 *           - addQueryParams: add query params to 'location'.
 *             Here 'searchParams' get this params from 'location'.
 *             This can make also hook 'useSearchParams' from react-router-dom:
 *             https://reactrouter.com/en/main/hooks/use-search-params
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

          if (orderFromUrl) {
            dispatch(articlePageSliceActions.setOrder(orderFromUrl));
          }

          if (sortFromUrl) {
            dispatch(articlePageSliceActions.setSort(sortFromUrl));
          }

          dispatch(articlePageSliceActions.initView());
          dispatch(fetchArticlesList({}));
        }
      },
    );
