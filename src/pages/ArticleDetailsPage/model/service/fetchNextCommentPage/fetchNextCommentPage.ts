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
import {
  getArticleCommentsHasMore, getArticleCommentsIsLoading,
  getArticleCommentsPage,
} from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';
import { articleDetailsCommentsActions } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useParams } from 'react-router-dom';

export const fetchNextCommentPage = createAsyncThunk<
    void,
    string,
    ThunkConfig<string>>(
      'page/fetchNextCommentPage',
      async (id, thunkAPI) => {
        const {
          dispatch,
          getState,
        } = thunkAPI;
        const isLoading = getArticleCommentsIsLoading(getState());
        const page = getArticleCommentsPage(getState());
        const hasMore = getArticleCommentsHasMore(getState());

        if (hasMore && !isLoading) {
          dispatch(articleDetailsCommentsActions.setCommentPage(page + 1));
          dispatch(fetchCommentsByArticleId(id));
        }
      },
    );
