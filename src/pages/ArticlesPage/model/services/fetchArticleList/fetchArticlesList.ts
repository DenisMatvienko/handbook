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
  getArticlePageOrder, getArticlePageSearch,
  getArticlePageSort,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';

interface FetchArticleListProps {
    page?: number,
}

export const fetchArticlesList = createAsyncThunk<Article[],
    FetchArticleListProps,
    ThunkConfig<string>>(
      'articlesPage/fetchArticlesList',
      async (props, thunkAPI) => {
        const {
          page = 1,
        } = props;
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getArticlePageSearch(getState());

        try {
          const response = await extra.api.get<Article[]>('/articles', {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
              _sort: sort,
              _order: order,
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
