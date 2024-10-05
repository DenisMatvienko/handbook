/**
 *    fetchArticlesList fetching
 *
 *      @param _expand
 *          - Need for view user avatar in ArticleView.LIST
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import {
  getArticlePageLimit,
  getArticlePageOrder,
  getArticlePageSort,
  getArticlePageTabs,
  getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { getNavbarSearchArticleSelector } from 'features/navbar/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { ArticleType } from 'entities/Article/model/types/article';

interface FetchArticleListProps {
    replace?: boolean,
}

export const fetchArticlesList = createAsyncThunk<Article[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'articlesPage/fetchArticlesList',
      async (props: FetchArticleListProps, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const page = getArticlesPageNum(getState());
        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getNavbarSearchArticleSelector(getState());
        const type = getArticlePageTabs(getState());

        try {
          addQueryParams({
            sort,
            order,
            type,
          });
          const response = await extra.api.get<Article[]>('/articles', {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
              _sort: sort,
              _order: order,
              type_like: type === ArticleType.ALL ? undefined : type,
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
