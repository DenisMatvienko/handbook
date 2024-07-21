/**
 *    fetchNextArticlePage fetching
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getUserAuthData } from 'entities/User';
import {
  getArticleCommentsHasMore, getArticleCommentsIsLoading,
  getArticleCommentsPage,
} from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsActions } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';

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
        const userData = getUserAuthData(getState());

        if (hasMore && !isLoading && id === userData?.id) {
          dispatch(articleDetailsCommentsActions.setCommentPage(page + 1));
          dispatch(fetchCommentsByArticleId(id));
        }
      },
    );
