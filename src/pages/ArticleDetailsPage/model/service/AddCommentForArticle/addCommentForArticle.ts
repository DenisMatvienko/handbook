/**
 *    addCommentForArticle fetching;
 *      - Add comments in articles;
 *
 *      @param createAsyncThunk
 *          - string - type of comment text
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article/model/selectors/getArticleDetails';
import { getArticleCommentsHasMore } from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment,
    string,
    ThunkConfig<string>>(
      'articleDetailsPage/addCommentForArticle',
      async (text, thunkAPI) => {
        const {
          extra,
          dispatch,
          rejectWithValue,
          getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetails(getState());

        if (!userData || !text || !article) {
          return rejectWithValue('no data :(');
        }

        try {
          const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
          });

          if (!response.data) {
            throw new Error();
          }

          dispatch(fetchCommentsByArticleId(article.id));

          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      }
      ,
    );
